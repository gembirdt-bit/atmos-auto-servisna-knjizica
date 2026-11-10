Atmos Auto Servisna Knjižica je moderna PWA (Progressive Web App) aplikacija namenjena vođenju evidencije o vozilima, servisima, troškovima održavanja i važnim datumima.

Aplikacija je dostupna online:

https://gembirdt-bit.github.io/atmos-auto-servisna-knjizica/

Glavne funkcionalnosti
Evidencija vozila
Omogućava vođenje više vozila u jednoj aplikaciji.

Za svako vozilo mogu se evidentirati:

Marka
Model
Godište
Registracija
VIN broj
Kilometraža
Napomene
Servisna istorija
Moguće je evidentirati kompletnu istoriju održavanja vozila:

Mali servis
Veliki servis
Zamena ulja
Zamena filtera
Zamena kočnica
Zamena akumulatora
Zamena guma
Registracija
Tehnički pregled
Ostali radovi
Svaki zapis može sadržati:

Datum servisa
Kilometražu
Opis radova
Trošak
Napomenu
Praćenje troškova
Aplikacija omogućava pregled:

Troškova po servisu
Ukupnih troškova po vozilu
Istorije ulaganja u vozilo
Finansijskog praćenja održavanja
Podsetnici
Podrška za praćenje važnih događaja:

Registracija vozila
Istek osiguranja
Mali servis
Veliki servis
Zamena ulja
Zamena guma
Tehnički pregled
Brza pretraga
Moguće je brzo pronaći podatke prema:

Vozilu
Datumu
Kilometraži
Vrsti servisa
Opisu servisa
Offline rad
Atmos Auto Servisna Knjižica funkcioniše i bez internet konekcije zahvaljujući PWA tehnologiji.

Prednosti:

Pristup podacima bez interneta
Brzo učitavanje
Lokalno čuvanje podataka
Instalacija kao aplikacija
PWA Instalacija
Android
Otvoriti aplikaciju u Chrome pregledaču.
Izabrati opciju "Install App".
Potvrditi instalaciju.
Windows
Otvoriti aplikaciju u Chrome ili Edge pregledaču.
Kliknuti na ikonu za instalaciju aplikacije.
Potvrditi instalaciju.
iPhone / iPad
Otvoriti aplikaciju u Safari pregledaču.
Izabrati Share.
Izabrati Add to Home Screen.
Struktura Projekta
/
├── index.html
├── manifest.json
├── sw.js
├── icon.png
└── README.md
index.html
Glavna aplikacija.

Sadrži:

Korisnički interfejs
Logiku aplikacije
Rad sa podacima
Prikaz vozila i servisa
manifest.json
PWA konfiguracija:

Naziv aplikacije
Ikonice
Tema
Način pokretanja
sw.js
Service Worker:

Offline režim rada
Keširanje podataka
Brže učitavanje aplikacije
icon.png
Ikonica instalirane aplikacije.

Lokalno Pokretanje
Klonirati projekat:

git clone https://github.com/gembirdt-bit/atmos-auto-servisna-knjizica.git
Otvoriti:

index.html
ili pokrenuti lokalni web server.

Čuvanje Podataka
Trenutna verzija čuva podatke lokalno u pregledaču korisnika.

Prednosti:

Nije potreban server
Nema registracije naloga
Brz pristup podacima
Potpuna kontrola nad podacima
Napomena:

Brisanje browser podataka može dovesti do gubitka lokalno sačuvanih informacija.

Preporučuje se redovan izvoz rezervne kopije podataka.

Backup i Obnova Podataka
Izvoz
Moguće je napraviti rezervnu kopiju kompletne evidencije.

Backup može sadržati:

Vozila
Servisnu istoriju
Troškove
Podešavanja
Uvoz
Podaci se mogu vratiti iz prethodno sačuvanog backup fajla.

Planirane Funkcionalnosti
Firebase Integracija
Planirana podrška za:

Google Login
Cloud sinhronizaciju
Backup u oblaku
Više uređaja po korisniku
Cloud Servisna Knjižica
Omogućila bi:

Pristup podacima sa bilo kog uređaja
Automatsku sinhronizaciju
Zaštitu od gubitka podataka
Fotografije i Dokumentacija
Planirano:

Dodavanje slika računa
Fotografije vozila
Skenirani servisni izveštaji
PDF dokumentacija
Notifikacije
Planirana podrška za:

Push obaveštenja
Podsetnike za registraciju
Podsetnike za servis
Obaveštenja po kilometraži
Višekorisnički Režim
Moguće buduće funkcije:

Deljenje vozila
Porodični nalozi
Više korisnika po vozilu
Upravljanje manjim voznim parkovima
Tehnologije
Atmos Auto Servisna Knjižica koristi:

HTML5
CSS3
JavaScript
Progressive Web App (PWA)
Service Worker
Web Storage API
Prednosti Projekta
Besplatno korišćenje
Jednostavno upravljanje vozilima
Instalacija kao aplikacija
Offline rad
Lokalno čuvanje podataka
Brz pristup servisnoj istoriji
Praćenje troškova održavanja
Licenca
Projekat je otvoren za dalji razvoj i unapređenja.

Autor
GembirdT-Bit

GitHub: https://github.com/gembirdt-bit

Repozitorijum: https://github.com/gembirdt-bit/atmos-auto-servisna-knjizica

Online aplikacija: https://gembirdt-bit.github.io/atmos-auto-servisna-knjizica/
