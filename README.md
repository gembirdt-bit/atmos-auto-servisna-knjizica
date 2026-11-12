# Atmos Auto Servisna Knjižica

Atmos Auto Servisna Knjižica je moderna PWA (Progressive Web App) aplikacija namenjena vođenju evidencije o vozilima, servisima, troškovima održavanja i važnim datumima.

Aplikacija je dostupna online:  
https://gembirdt-bit.github.io/atmos-auto-servisna-knjizica/

---

## Glavne funkcionalnosti

### Evidencija vozila
Omogućava vođenje više vozila u jednoj aplikaciji. Za svako vozilo mogu se evidentirati:
- Marka
- Model
- Godište
- Registracija
- VIN broj
- Kilometraža
- Napomene

### Servisna istorija
Moguće je evidentirati kompletnu istoriju održavanja vozila:
- Mali servis
- Veliki servis
- Zamena ulja
- Zamena filtera
- Zamena kočnica
- Zamena akumulatora
- Zamena guma
- Registracija
- Tehnički pregled
- Ostali radovi

Svaki zapis može sadržati:
- Datum servisa
- Kilometražu
- Opis radova
- Trošak
- Napomenu

### Praćenje troškova
Aplikacija omogućava pregled:
- Troškova po servisu
- Ukupnih troškova po vozilu
- Istorije ulaganja u vozilo
- Finansijskog praćenja održavanja

### Podsetnici
Podrška za praćenje važnih događaja:
- Registracija vozila
- Istek osiguranja
- Mali servis
- Veliki servis
- Zamena ulja
- Zamena guma
- Tehnički pregled

### Brza pretraga
Moguće je brzo pronaći podatke prema:
- Vozilu
- Datumu
- Kilometraži
- Vrsti servisa
- Opisu servisa

---

### Google Drive sinhronizacija
Podaci se po želji čuvaju na **tvom Google Drive-u** (fajl „Atmos servisna knjižica — podaci.json“), pa svi tvoji uređaji sa istim Google nalogom dele ista vozila, servise, gorivo, troškove i podsetnike. Aplikacija traži samo dozvolu za fajlove koje sama napravi (`drive.file`) i ne vidi ostale fajlove na Drive-u. Uključuje se u Podešavanja → Google Drive.

### Rezervna kopija
Dugmad **Napravi rezervnu kopiju** i **Vrati rezervnu kopiju** (iz fajla ili iz automatskih dnevnih kopija na uređaju). CSV za Excel, štampa i automatsko čuvanje u fajl (računar) su pod „Napredno“.

[Politika privatnosti](https://gembirdt-bit.github.io/privatnost.html) · [Uslovi korišćenja](https://gembirdt-bit.github.io/uslovi.html)

## Offline rad

Atmos Auto Servisna Knjižica funkcioniše i bez internet konekcije zahvaljujući PWA tehnologiji.

**Prednosti:**
- Pristup podacima bez interneta
- Brzo učitavanje
- Lokalno čuvanje podataka
- Instalacija kao aplikacija

---

## PWA instalacija

### Android
1. Otvoriti aplikaciju u Chrome pregledaču.
2. Izabrati opciju "Install App".
3. Potvrditi instalaciju.

### Windows
1. Otvoriti aplikaciju u Chrome ili Edge pregledaču.
2. Kliknuti na ikonu za instalaciju aplikacije.
3. Potvrditi instalaciju.

### iPhone / iPad
1. Otvoriti aplikaciju u Safari pregledaču.
2. Izabrati Share.
3. Izabrati Add to Home Screen.

---
Autor
Gemb-Bit Željko Ilić


GitHub:** [gembirdt-bit](https://github.com/gembirdt-bit)
Repozitorijum:** [atmos-auto-servisna-knjizica](https://github.com/gembirdt-bit/atmos-auto-servisna-knjizica)
Live Demo:** [Pogledaj aplikaciju uživo](https://gembirdt-bit.github.io/atmos-auto-servisna-knjizica)

## Licenca

Aplikaciju moižete slobodno koristiti uz uslov da ostavite credits link ka autoru - ako radite clone.

Ako Vam se dopadaju moje aplikacije i želite da uplatite neki simboličan iznos za kafu ili ručak :D 
Možete donirati na račun: 115000000006810143 Željko Ilić, Beograd. 
Hvala!

## Struktura projekta

```text
/
├── index.html
├── manifest.json
├── sw.js
├── icon.png
└── README.md

