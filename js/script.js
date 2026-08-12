// =====================================================
// KAUCJUSZ.PL
// GŁÓWNY JAVASCRIPT
// =====================================================


// =====================================================
// BAZA CEN
// =====================================================

const prices = {

    // =========================
    // 🚗 SAMOCHODY
    // =========================

    "audi": 180000,
    "audi a1": 90000,
    "audi a3": 120000,
    "audi a4": 150000,
    "audi a5": 180000,
    "audi a6": 250000,
    "audi a7": 350000,
    "audi a8": 500000,
    "audi q2": 130000,
    "audi q3": 170000,
    "audi q5": 230000,
    "audi q7": 350000,
    "audi q8": 450000,
    "audi tt": 120000,
    "audi r8": 700000,
    "audi rs3": 300000,
    "audi rs4": 400000,
    "audi rs5": 450000,
    "audi rs6": 600000,
    "audi rs7": 650000,

    "bmw": 200000,
    "bmw 1": 120000,
    "bmw 2": 150000,
    "bmw 3": 170000,
    "bmw 4": 220000,
    "bmw 5": 260000,
    "bmw 6": 350000,
    "bmw 7": 500000,
    "bmw 8": 600000,
    "bmw x1": 180000,
    "bmw x2": 200000,
    "bmw x3": 250000,
    "bmw x4": 300000,
    "bmw x5": 400000,
    "bmw x6": 450000,
    "bmw x7": 550000,
    "bmw m2": 350000,
    "bmw m3": 450000,
    "bmw m4": 500000,
    "bmw m5": 650000,
    "bmw m8": 800000,
    "bmw gs": 90000,
    "bmw s1000rr": 120000,

    "mercedes": 220000,
    "mercedes a": 150000,
    "mercedes b": 160000,
    "mercedes c": 220000,
    "mercedes e": 300000,
    "mercedes s": 600000,
    "mercedes cla": 200000,
    "mercedes cls": 350000,
    "mercedes gla": 190000,
    "mercedes glb": 220000,
    "mercedes glc": 280000,
    "mercedes gle": 400000,
    "mercedes gls": 600000,
    "mercedes amg": 450000,
    "mercedes amg gt": 800000,

    "volkswagen": 120000,
    "golf": 120000,
    "golf gti": 180000,
    "golf r": 220000,
    "passat": 150000,
    "arteon": 200000,
    "tiguan": 180000,
    "touareg": 300000,
    "t-roc": 150000,
    "id.3": 160000,
    "id.4": 200000,
    "id.7": 250000,

    "toyota": 130000,
    "toyota yaris": 90000,
    "toyota corolla": 110000,
    "toyota camry": 160000,
    "toyota rav4": 180000,
    "toyota land cruiser": 450000,
    "toyota supra": 300000,
    "toyota gr86": 180000,

    "ford": 120000,
    "ford fiesta": 80000,
    "ford focus": 110000,
    "ford mondeo": 130000,
    "ford mustang": 280000,
    "ford ranger": 220000,
    "ford raptor": 300000,
    "ford bronco": 250000,

    "opel": 100000,
    "opel astra": 100000,
    "opel corsa": 80000,
    "opel insignia": 120000,
    "opel mokka": 120000,

    "skoda": 110000,
    "skoda fabia": 80000,
    "skoda octavia": 120000,
    "skoda superb": 180000,
    "skoda kodiaq": 180000,

    "volvo": 200000,
    "volvo xc40": 180000,
    "volvo xc60": 250000,
    "volvo xc90": 350000,
    "volvo s60": 180000,

    "lexus": 250000,
    "lexus is": 220000,
    "lexus es": 250000,
    "lexus nx": 250000,
    "lexus rx": 350000,
    "lexus lc": 700000,

    "porsche": 500000,
    "porsche cayenne": 500000,
    "porsche macan": 350000,
    "porsche panamera": 550000,
    "porsche taycan": 550000,
    "porsche 911": 750000,
    "porsche 718": 450000,

    "ferrari": 1500000,
    "ferrari roma": 1500000,
    "ferrari 296": 2000000,
    "ferrari sf90": 2500000,

    "lamborghini": 1500000,
    "lamborghini huracan": 1500000,
    "lamborghini revuelto": 2500000,
    "lamborghini urus": 1200000,

    "mclaren": 1800000,
    "mclaren 720s": 1800000,
    "mclaren artura": 1400000,

    "aston martin": 1200000,
    "aston martin vantage": 1000000,
    "aston martin db12": 1500000,

    "maserati": 500000,
    "maserati granturismo": 900000,
    "maserati grecale": 450000,

    "bentley": 1500000,
    "bentley continental": 1400000,
    "bentley bentayga": 1300000,

    "rolls royce": 2500000,
    "rolls-royce": 2500000,
    "rolls royce ghost": 2500000,
    "rolls royce phantom": 3500000,
    "rolls royce cullinan": 3000000,

    "bugatti": 10000000,
    "bugatti chiron": 12000000,

    "koenigsegg": 15000000,
    "pagani": 15000000,

    "tesla": 200000,
    "tesla model 3": 180000,
    "tesla model y": 220000,
    "tesla model s": 450000,
    "tesla model x": 500000,
    "tesla cybertruck": 350000,

    "luksusowy samochód": 1000000,
    "luksusowy samochod": 1000000,
    "supercar": 1000000,
    "supersamochód": 1000000,
    "supersamochod": 1000000,
    "hypercar": 5000000,
    "hipersamochód": 5000000,
    "hipersamochod": 5000000,
    "kolekcja samochodów": 3000000,
    "kolekcja samochodow": 3000000,


    // =========================
    // 🏍️ MOTOCYKLE
    // =========================

    "motocykl": 50000,
    "motor": 50000,
    "yamaha": 50000,
    "yamaha mt07": 35000,
    "yamaha mt09": 50000,
    "yamaha r1": 90000,
    "yamaha r7": 55000,
    "yamaha r6": 60000,

    "honda": 50000,
    "honda cbr": 60000,
    "honda africa twin": 80000,
    "honda goldwing": 130000,

    "kawasaki": 50000,
    "kawasaki ninja": 60000,
    "kawasaki ninja 650": 45000,
    "kawasaki ninja 1000": 65000,

    "suzuki": 45000,
    "suzuki hayabusa": 80000,

    "ducati": 80000,
    "ducati panigale": 120000,
    "ducati monster": 60000,

    "harley": 100000,
    "harley davidson": 100000,


    // =========================
    // 🏠 NIERUCHOMOŚCI
    // =========================

    "dom": 800000,
    "mały dom": 500000,
    "maly dom": 500000,
    "duży dom": 1200000,
    "duzy dom": 1200000,
    "nowy dom": 1000000,
    "dom jednorodzinny": 900000,
    "dom z basenem": 1500000,
    "willa": 2500000,
    "rezydencja": 5000000,
    "posiadłość": 3000000,
    "posiadlosc": 3000000,
    "domek": 500000,
    "domek letniskowy": 350000,

    "mieszkanie": 550000,
    "kawalerka": 350000,
    "apartament": 900000,
    "penthouse": 3000000,
    "loft": 800000,
    "studio": 350000,

    "działka": 250000,
    "dzialka": 250000,
    "działka budowlana": 300000,
    "dzialka budowlana": 300000,
    "działka rekreacyjna": 150000,
    "las": 300000,
    "pole": 250000,
    "gospodarstwo": 1500000,

    "garaż": 80000,
    "garaz": 80000,
    "garaż podziemny": 100000,
    "garaz podziemny": 100000,

    "luksusowy dom": 3000000,
    "dom marzeń": 1500000,
    "dom marzen": 1500000,
    "willa nad morzem": 3000000,
    "dom nad morzem": 2000000,
    "dom w górach": 1500000,
    "dom w gorach": 1500000,


    // =========================
    // 📱 TELEFONY
    // =========================

    "telefon": 3000,
    "smartfon": 3000,

    "iphone": 5000,
    "iphone 13": 2500,
    "iphone 13 pro": 3500,
    "iphone 14": 3000,
    "iphone 14 pro": 4000,
    "iphone 15": 3500,
    "iphone 15 pro": 4500,
    "iphone 15 pro max": 5500,
    "iphone 16": 4500,
    "iphone 16 pro": 5500,
    "iphone 16 pro max": 6500,
    "iphone 17": 5000,
    "iphone 17 pro": 6000,
    "iphone 17 pro max": 7000,

    "samsung": 4000,
    "samsung galaxy": 4000,
    "galaxy s23": 3000,
    "galaxy s24": 3500,
    "galaxy s24 ultra": 5500,
    "galaxy s25": 4000,
    "galaxy s25 ultra": 6000,
    "galaxy z fold": 8000,
    "galaxy z flip": 5000,

    "google pixel": 3500,
    "pixel 8": 3000,
    "pixel 9": 3500,
    "pixel 10": 4500,


    // =========================
    // 💻 KOMPUTERY
    // =========================

    "laptop": 5000,
    "tani laptop": 2500,
    "dobry laptop": 5000,
    "laptop gamingowy": 8000,
    "gaming laptop": 8000,

    "macbook": 7000,
    "macbook air": 6000,
    "macbook pro": 12000,
    "macbook m3": 8000,
    "macbook m4": 9000,

    "komputer": 6000,
    "pc": 6000,
    "komputer gamingowy": 10000,
    "gaming pc": 12000,
    "komputer do gier": 10000,
    "stacja robocza": 20000,

    "imac": 8000,
    "mac mini": 4000,
    "mac studio": 10000,

    "monitor": 2000,
    "monitor gamingowy": 3000,
    "monitor 4k": 3000,
    "monitor ultrawide": 5000,

    "telewizor": 4000,
    "tv": 4000,
    "telewizor 4k": 4000,
    "telewizor oled": 6000,
    "telewizor samsung": 4500,
    "telewizor lg": 5000,
    "telewizor sony": 6000,


    // =========================
    // 🎮 KONSOLE
    // =========================

    "konsola": 2500,
    "playstation": 2500,
    "ps5": 2500,
    "ps5 pro": 3500,
    "ps4": 1500,

    "xbox": 2500,
    "xbox series x": 2500,
    "xbox series s": 1500,

    "nintendo switch": 1800,
    "switch 2": 2500,
    "steam deck": 2500,
    "rog ally": 3000,

    "vr": 3000,
    "gogle vr": 3000,
    "gogle": 3000,
    "meta quest": 2500,
    "oculus": 2500,


    // =========================
    // 📷 FOTO / VIDEO
    // =========================

    "aparat": 5000,
    "aparat fotograficzny": 5000,
    "lustrzanka": 5000,
    "bezlusterkowiec": 7000,
    "sony aparat": 7000,
    "canon aparat": 6000,
    "nikon aparat": 6000,

    "obiektyw": 4000,
    "dron": 4000,
    "dji": 4000,
    "dji mini": 3000,
    "dji air": 5000,
    "dji mavic": 6000,
    "kamera": 5000,
    "gopro": 2000,


    // =========================
    // 🎧 AUDIO
    // =========================

    "słuchawki": 1500,
    "sluchawki": 1500,
    "airpods": 1000,
    "airpods pro": 1200,
    "sony słuchawki": 1500,
    "sony sluchawki": 1500,
    "bose": 1500,
    "głośniki": 2000,
    "glosniki": 2000,
    "soundbar": 2500,
    "kino domowe": 8000,


    // =========================
    // 🚲 SPORT
    // =========================

    "rower": 4000,
    "rower górski": 5000,
    "rower gorski": 5000,
    "rower szosowy": 8000,
    "rower gravel": 7000,
    "rower elektryczny": 12000,
    "e-bike": 12000,
    "kolarzówka": 8000,
    "kolarzowka": 8000,

    "hulajnoga": 3000,
    "hulajnoga elektryczna": 4000,

    "deskorolka": 1000,
    "longboard": 1500,
    "rolki": 800,

    "narty": 2500,
    "snowboard": 2500,
    "deska snowboardowa": 2000,
    "sprzęt narciarski": 4000,
    "sprzet narciarski": 4000,

    "bieżnia": 5000,
    "bieznia": 5000,
    "orbitrek": 3000,
    "ławka treningowa": 1500,
    "lawka treningowa": 1500,
    "hantle": 1000,
    "sztanga": 1000,
    "siłownia": 15000,
    "silownia": 15000,


    // =========================
    // 🎸 MUZYKA
    // =========================

    "gitara": 3000,
    "gitara elektryczna": 4000,
    "gitara akustyczna": 2500,
    "gitara basowa": 3000,
    "bas": 3000,
    "pianino": 8000,
    "fortepian": 30000,
    "keyboard": 2500,
    "perkusja": 5000,
    "skrzypce": 3000,
    "saksofon": 5000,
    "syntezator": 5000,
    "studio muzyczne": 30000,


    // =========================
    // ✈️ PODRÓŻE
    // =========================

    "wakacje": 10000,
    "wycieczka": 8000,
    "podróż": 8000,
    "podroz": 8000,
    "all inclusive": 10000,
    "hotel": 5000,

    "malediwy": 15000,
    "seszele": 15000,
    "mauritius": 13000,
    "hawaje": 18000,
    "karaiby": 15000,
    "bahamy": 15000,

    "dubaj": 10000,
    "abu dhabi": 10044,
    "japonia": 12099,
    "tokio": 12000,
    "usa": 15000,
    "nowy jork": 10000,
    "los angeles": 12000,
    "miami": 12000,
    "kalifornia": 15000,
"boski krokiet": 40,
    "londyn": 6099,
    "paryż": 5000,
    "paryz": 5070,
    "rzym": 5000,
    "włochy": 7070,
    "wlochy": 7990,
    "hiszpania": 7050,
    "grecja": 7700,
    "norwegia": 8000,
    "islandia": 10070,
    "szwajcaria": 100099,
    "gta 6": 349,

    "miesiąc wakacji": 20000,
    "miesiac wakacji": 20000,
    "rok podróży": 100000,
    "rok podrozy": 100000,
    "podróż dookoła świata": 100000,
    "podroz dookola swiata": 100000,
    "dookoła świata": 100000,
    "dookola swiata": 100000,


    // =========================
    // 🛥️ ŁODZIE / JACHTY
    // =========================

    "łódź": 300000,
    "lodz": 300000,
    "motorówka": 250000,
    "motorowka": 250000,
    "jacht": 1000000,
    "jacht luksusowy": 5000000,
    "katamaran": 1000000,
    "skuter wodny": 80000,


    // =========================
    // ✈️ LOTNICTWO
    // =========================

    "samolot": 5000000,
    "prywatny samolot": 20000000,
    "jet": 20000000,
    "odrzutowiec": 20000000,
    "helikopter": 5000000,
    "śmigłowiec": 5000000,
    "smiglowiec": 5000000,


    // =========================
    // 💎 LUKSUS
    // =========================

    "zegarek": 10000,
    "rolex": 50000,
    "rolex submariner": 60000,
    "rolex daytona": 100000,
    "omega": 30000,
    "omega speedmaster": 35000,
    "cartier": 40000,
    "patek philippe": 500000,
    "audemars piguet": 200000,
    "richard mille": 1500000,

    "biżuteria": 10000,
    "bizuteria": 10000,
    "pierścionek": 8000,
    "pierscionek": 8000,
    "pierścionek zaręczynowy": 15000,
    "pierscionek zareczynowy": 15000,
    "naszyjnik": 10000,
    "łańcuch": 5000,
    "lancuch": 5000,
    "bransoletka": 5000,
    "diament": 50000,


    // =========================
    // 👕 MODA
    // =========================

    "garnitur": 4000,
    "garnitur szyty na miarę": 8000,
    "garnitur szyty na miare": 8000,
    "sukienka": 2000,
    "suknia ślubna": 8000,
    "suknia slubna": 8000,
    "buty": 800,
    "sneakersy": 1000,
    "nike": 800,
    "adidas": 700,
    "gucci": 4000,
    "louis vuitton": 7000,
    "prada": 5000,
    "balenciaga": 4000,
    "versace": 4000,
    "chanel": 6000,
    "hermes": 10000,
    "torebka": 3000,
    "plecak": 1000,


    // =========================
    // 🛋️ DOM
    // =========================

    "meble": 10000,
    "sofa": 5000,
    "kanapa": 5000,
    "narożnik": 6000,
    "naroznik": 6000,
    "łóżko": 4000,
    "lozko": 4000,
    "materac": 2000,
    "szafa": 3000,
    "stół": 2500,
    "stol": 2500,
    "krzesła": 1500,
    "krzesla": 1500,
    "biurko": 2000,
    "fotel": 2000,

    "kuchnia": 30000,
    "kuchnia na wymiar": 40000,
    "łazienka": 20000,
    "lazienka": 20000,
    "remont": 80000,
    "generalny remont": 150000,

    "basen": 50000,
    "basen ogrodowy": 30000,
    "jacuzzi": 20000,
    "sauna": 30000,
    "ogród": 30000,
    "ogrod": 30000,
    "altana": 15000,
    "grill": 3000,
    "kosiarka": 3000,


    // =========================
    // 🍳 AGD
    // =========================

    "lodówka": 4000,
    "lodowka": 4000,
    "lodówka side by side": 8000,
    "lodowka side by side": 8000,
    "pralka": 3000,
    "suszarka": 3000,
    "zmywarka": 3000,
    "piekarnik": 3000,
    "płyta": 2500,
    "plyta": 2500,
    "ekspres do kawy": 4000,
    "odkurzacz": 1500,
    "dyson": 2500,
    "robot sprzątający": 2500,
    "robot sprzatajacy": 2500,


    // =========================
    // 🐕 ZWIERZĘTA
    // =========================

    "pies": 3000,
    "szczeniak": 3000,
    "kot": 2000,
    "kociak": 2000,
    "koń": 30000,
    "kon": 30000,
    "kucyk": 20000,
    "papuga": 1500,
    "akwarium": 3000,
    "rybki": 500,


    // =========================
    // 🎓 EDUKACJA
    // =========================

    "studia": 30000,
    "studia prywatne": 50000,
    "kurs": 3000,
    "kurs programowania": 8000,
    "kurs językowy": 3000,
    "kurs jezykowy": 3000,
    "szkolenie": 5000,
    "certyfikat": 2000,
    "prawo jazdy": 4000,
    "kurs prawa jazdy": 4000,


    // =========================
    // 💼 BIZNES
    // =========================

    "firma": 500000,
    "biznes": 300000,
    "startup": 500000,
    "restauracja": 500000,
    "kawiarnia": 300000,
    "sklep internetowy": 50000,
    "sklep": 300000,
    "salon fryzjerski": 150000,
    "bar": 300000,
    "hotel": 5000000,
    "franczyza": 300000,


    // =========================
    // 💰 PIENIĄDZE
    // =========================

    "100 tysięcy": 100000,
    "100 tysiecy": 100000,
    "200 tysięcy": 200000,
    "200 tysiecy": 200000,
    "300 tysięcy": 300000,
    "300 tysiecy": 300000,
    "500 tysięcy": 500000,
    "500 tysiecy": 500000,

    "milion": 1000000,
    "milion złotych": 1000000,
    "milion zlotych": 1000000,
    "milion zł": 1000000,
    "milion zl": 1000000,

    "2 miliony": 2000000,
    "3 miliony": 3000000,
    "5 milionów": 5000000,
    "5 milionow": 5000000,
    "10 milionów": 10000000,
    "10 milionow": 10000000,
    "50 milionów": 50000000,
    "50 milionow": 50000000,
    "100 milionów": 100000000,
    "100 milionow": 100000000,


    // =========================
    // 🎉 ROZRYWKA
    // =========================

    "impreza": 10000,
    "koncert": 3000,
    "festiwal": 3000,
    "vip": 5000,
    "bilet vip": 3000,
    "bilet lotniczy": 2000,
    "mecz": 500,
    "bilet na mecz": 500,


    // =========================
    // 🧑‍🍳 KUCHNIA
    // =========================

    "noże": 1000,
    "noze": 1000,
    "zestaw noży": 2000,
    "zestaw nozy": 2000,
    "patelnia": 500,
    "garnki": 1000,
    "robot kuchenny": 2500,
    "thermomix": 6500,
    "air fryer": 800,
    "mikser": 800,
    "blender": 500,


    // =========================
    // 🎨 HOBBY
    // =========================

    "lego": 1000,
    "lego technic": 1500,
    "lego star wars": 2000,
    "model": 500,
    "kolekcja": 10000,
    "kolekcja zegarków": 50000,
    "kolekcja zegarkow": 50000,
    "instrument": 3000,
    "sprzęt muzyczny": 10000,
    "sprzet muzyczny": 10000,


    // =========================
    // 🏕️ OUTDOOR
    // =========================

    "namiot": 1500,
    "kamper": 300000,
    "camper": 300000,
    "przyczepa kempingowa": 100000,
    "van": 200000,
    "vanlife": 250000,
    "ognisko": 1000,
    "plecak turystyczny": 1000,
    "sprzęt campingowy": 5000,
    "sprzet campingowy": 5000,


    // =========================
    // 🚀 EKSTREMALNE MARZENIA
    // =========================

    "rakieta": 50000000,
    "statek": 100000000,
    "wyspa": 10000000,
    "prywatna wyspa": 30000000,
    "zamek": 5000000,
    "zamek w polsce": 10000000,
    "zamek za granicą": 20000000,
    "zamek za granica": 20000000,

    "własny stadion": 500000000,
    "wlasny stadion": 500000000,
    "stadion": 500000000,
    "wieżowiec": 500000000,
    "drapacz chmur": 1000000000,


    // =========================
    // ❤️ ŚLUB / DOŚWIADCZENIA
    // =========================

    "ślub": 60000,
    "slub": 60000,
    "wesele": 60000,
    "luksusowy ślub": 150000,
    "luksusowy slub": 150000,

    "miesiąc miodowy": 20000,
    "miesiac miodowy": 20000,


    // =========================
    // 😎 ŻART
    // =========================

    "anna powaska": "nie stać Cię, ale możesz wpisać inną 😎",
    "anna": "nie stać Cię, ale możesz wpisać inną 😎"
};


// =====================================================
// FUNKCJA NORMALIZUJĄCA TEKST
// =====================================================

function normalizeText(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ")
        .replace(/[!?.,;:()[\]{}"'`]/g, "");

}


// =====================================================
// SZUKANIE CENY
// =====================================================

function findPrice(dream) {

    const text = normalizeText(dream);

    if (!text) {
        return null;
    }

    // -------------------------------------------------
    // 1. Najpierw sprawdzamy idealne dopasowanie
    // -------------------------------------------------

    if (prices[text] !== undefined) {

        return {
            key: text,
            price: prices[text]
        };

    }


    // -------------------------------------------------
    // 2. Szukamy frazy wewnątrz zdania
    //
    // np.
    // "chcę audi q5"
    // znajdzie "audi q5"
    // -------------------------------------------------

    const matches = Object.keys(prices)
        .filter(key => text.includes(key))
        .sort((a, b) => b.length - a.length);


    if (matches.length > 0) {

        const bestMatch = matches[0];

        return {
            key: bestMatch,
            price: prices[bestMatch]
        };

    }


    // -------------------------------------------------
    // 3. Jeśli nic nie znaleziono
    // -------------------------------------------------

    return null;

}


// =====================================================
// FORMATOWANIE CENY
// =====================================================

function formatPrice(price) {

    if (typeof price !== "number") {
        return price;
    }

    return price.toLocaleString("pl-PL");

}


// =====================================================
// GŁÓWNY PRZYCISK
// =====================================================

const calcBtn = document.getElementById("calcBtn");

if (calcBtn) {

    calcBtn.addEventListener("click", function () {

        const dreamInput = document.getElementById("dreamInput");

        if (!dreamInput) {
            return;
        }

        const dream = dreamInput.value.trim();


        // ---------------------------------------------
        // Puste pole
        // ---------------------------------------------

        if (!dream) {

            showResult(
                "Najpierw wpisz swoje marzenie 😎",
                0
            );

            return;
        }


        // ---------------------------------------------
        // Szukanie ceny
        // ---------------------------------------------

        const result = findPrice(dream);


        // ---------------------------------------------
        // Nie znaleziono
        // ---------------------------------------------

        if (!result) {

            showResult(
                `
                Nie znam jeszcze ceny tego marzenia 😅<br><br>
                Spróbuj wpisać coś bardziej konkretnego,
                np. <b>Audi Q5</b>, <b>iPhone 16 Pro</b>,
                <b>dom</b> albo <b>Malediwy</b>.
                `,
                0
            );

            return;
        }


        // ---------------------------------------------
        // Specjalny tekst zamiast ceny
        // ---------------------------------------------

        if (typeof result.price !== "number") {

            showResult(
                `
                Marzenie: <b>${escapeHTML(dream)}</b><br><br>
                ${result.price}
                `,
                0
            );

            return;
        }


        // ---------------------------------------------
        // Obliczenie butelek
        // ---------------------------------------------

        const depositValue = 0.50;

        const bottlesNeeded = Math.ceil(
            result.price / depositValue
        );


        // ---------------------------------------------
        // Wynik
        // ---------------------------------------------

        showResult(
            `
            Marzenie: <b>${escapeHTML(dream)}</b><br><br>

            Szacowana cena:
            <b>${formatPrice(result.price)} zł</b><br>

            Kaucja za butelkę:
            <b>${depositValue.toFixed(2).replace(".", ",")} zł</b><br><br>

            Potrzebujesz:
            <b>${formatPrice(bottlesNeeded)}</b>
            butelek!
            `,
            bottlesNeeded
        );

    });

}


// =====================================================
// ENTER W POLU TEKSTOWYM
// =====================================================

const dreamInput = document.getElementById("dreamInput");

if (dreamInput) {

    dreamInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            if (calcBtn) {
                calcBtn.click();
            }

        }

    });

}


// =====================================================
// ZABEZPIECZENIE TEKSTU UŻYTKOWNIKA
// =====================================================

function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// =====================================================
// POKAZYWANIE WYNIKU
// =====================================================

function showResult(text, bottles = 0) {

    const box = document.getElementById("result");

    if (!box) {
        return;
    }


    box.innerHTML = `
        <div class="result-text">
            ${text}
        </div>

        <div id="bottleAnimation" class="bottle-animation"></div>
    `;


    if (bottles > 0) {

        animateBottles(bottles);

    }

}


// =====================================================
// ANIMACJA BUTELEK
// =====================================================

function animateBottles(numberOfBottles) {

    const container =
        document.getElementById("bottleAnimation");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    // -------------------------------------------------
    // Nie tworzymy np. 2 000 000 elementów HTML 😭
    // -------------------------------------------------

    const visibleBottles =
        Math.min(numberOfBottles, 60);


    for (let i = 0; i < visibleBottles; i++) {

        const bottle =
            document.createElement("div");


        bottle.classList.add("bottle");


        // Losowa pozycja pozioma

        bottle.style.left =
            Math.random() * 92 + "%";


        // Losowa wysokość

        bottle.style.bottom =
            10 + Math.random() * 35 + "px";


        // Losowy rozmiar

        const scale =
            0.7 + Math.random() * 0.5;


        bottle.dataset.scale = scale;


        // Opóźnienie animacji

        bottle.style.animationDelay =
            `${i * 0.04}s`;


        container.appendChild(bottle);

    }

}


// =====================================================
// INFORMACJA O DUŻEJ LICZBIE BUTELEK
// =====================================================

// Jeśli np. Audi kosztuje 180 000 zł:
//
// 180 000 / 0,50 = 360 000 butelek
//
// Na ekranie pokazujemy tylko maksymalnie 60,
// ale wynik nadal pokazuje prawdziwą liczbę.
//
// =====================================================