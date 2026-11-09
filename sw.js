const CACHE='atmos-auto-v5';
const SHELL=['./','index.html','manifest.json','icon.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

// Mreža prvo (da uvek dobiješ najnoviju verziju), keš kao rezerva kad nema interneta
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(
    fetch(e.request).then(res=>{
      const copy=res.clone();
      caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
      return res;
    }).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html')))
  );
});

/* ---- Provera rokova u pozadini (Periodic Background Sync, gde je podržano) ---- */
const idb=()=>new Promise((res,rej)=>{const r=indexedDB.open('atmosAutoFS',1);r.onupgradeneeded=()=>r.result.createObjectStore('h');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});
const idbGet=async k=>{const d=await idb();return new Promise((res,rej)=>{const q=d.transaction('h').objectStore('h').get(k);q.onsuccess=()=>res(q.result);q.onerror=()=>rej(q.error)})};
const idbSet=async(k,v)=>{const d=await idb();return new Promise((res,rej)=>{const t=d.transaction('h','readwrite');t.objectStore('h').put(v,k);t.oncomplete=res;t.onerror=()=>rej(t.error)})};

function today0(){const t=new Date();t.setHours(0,0,0,0);return t}
function dayStr(){const t=new Date();return t.getFullYear()+'-'+(t.getMonth()+1)+'-'+t.getDate()}

async function checkAlerts(){
  const data=await idbGet('alerts');
  if(!data||!data.enabled||!data.items||!data.items.length)return;
  if(await idbGet('swLast')===dayStr())return;
  const lines=[];
  data.items.forEach(it=>{
    const pre=it.v?it.v+': ':'';
    if(it.date){
      const d=Math.round((new Date(it.date+'T00:00:00')-today0())/864e5);
      if(d<0)lines.push(`${pre}${it.label} – isteklo pre ${-d} d`);
      else if(d<=data.warnDays)lines.push(`${pre}${it.label} – ističe za ${d} d`);
    }
    if(it.km&&it.cur){
      const r=it.km-it.cur;
      if(r<=0)lines.push(`${pre}${it.label} – prekoračeno ${-r} km`);
      else if(r<=data.warnKm)lines.push(`${pre}${it.label} – još ${r} km`);
    }
  });
  if(!lines.length)return;
  await idbSet('swLast',dayStr());
  await self.registration.showNotification('Atmos Auto — podsetnik',{body:lines.slice(0,4).join('\n'),icon:'icon.png',tag:'atmos-alerts'});
}

self.addEventListener('periodicsync',e=>{
  if(e.tag==='atmos-check')e.waitUntil(checkAlerts());
});

self.addEventListener('notificationclick',e=>{
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{
    for(const c of list){if('focus' in c)return c.focus()}
    return self.clients.openWindow('./');
  }));
});
