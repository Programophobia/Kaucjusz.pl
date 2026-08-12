function analyzeReceipt() {
  const input = document.getElementById('receiptInput').value.toLowerCase();
  let result = "🔮 Oto Twój paragonowy portret:\n\n";

  if (input.trim() === "") {
    result = "🤔 Najpierw wklej jakiś paragon, Sherlocku Zakupowy!";
  } else {
    if (input.includes("piwo") || input.includes("lech") || input.includes("kustosz")) {
      result += "🍺 Koneser relaksu — spokojny duch z sercem do weekendów i playlisty 'Letnie wieczory'.\n";
    }
    if (input.includes("twarożek") || input.includes("grani")) {
      result += "🥣 Dusza domatora — kochasz miękkie tekstury i poranki z okruszkami.\n";
    }
    if (input.includes("buraczki") || input.includes("seler") || input.includes("marchew") || input.includes("cebula")) {
      result += "🥗 Kuchenny archeolog — Twoje dania mają wspomnienia i babcine tło dźwiękowe.\n";
    }
    if (input.includes("mydło") || input.includes("linda")) {
      result += "🧼 Minimalista z estetyką łazienki jak z reklamy — czystość to Twój lifestyle.\n";
    }
    if (input.includes("groszek") || input.includes("fasola")) {
      result += "🌱 Romantyk puszek — proste rzeczy sprawiają Ci największą radość.\n";
    }
    if (!result.includes("🍺") && !result.includes("🥗") && !result.includes("🧼")) {
      result += "🌀 Jesteś unikalny jak skład Twojego koszyka — nie da się Cię zaszufladkować!\n";
      if (input.includes("piwo") || input.includes("lech") || input.includes("kustosz")) {
  result += "🍺 Koneser relaksu — wieczór, Ty i puszka z duszą.\n"; matched = true;
}
if (input.includes("twarożek") || input.includes("grani") || input.includes("almette")) {
  result += "🥣 Romantyk poranków — życie zaczynasz od łyżki miłości.\n"; matched = true;
}
if (input.includes("buraczki") || input.includes("seler") || input.includes("marchew")) {
  result += "🥗 Tradycyjny czarodziej kuchni — gotujesz z pamięci pokoleń.\n"; matched = true;
}
if (input.includes("mydło") || input.includes("linda")) {
  result += "🧼 Czystość nie tylko ciała — ale i intencji.\n"; matched = true;
}
if (input.includes("czekolada") || input.includes("delicje")) {
  result += "🍫 Czuły smakosz — słodycze to Twoje emocjonalne bezpieczeństwo.\n"; matched = true;
}
if (input.includes("groszek") || input.includes("fasola") || input.includes("konserwa")) {
  result += "🥫 Pragmatyk z sercem — zawsze gotowy na kuchenną apokalipsę.\n"; matched = true;
}
if (input.includes("kawa") || input.includes("jacobs") || input.includes("nescafe")) {
  result += "☕ Filozof w szlafroku — życie analizujesz przez zapach Arabiki.\n"; matched = true;
}
if (input.includes("herbata") || input.includes("lipton")) {
  result += "🍵 Spokojna dusza — każdy dzień zaczynasz od łagodnej czułości.\n"; matched = true;
}
if (input.includes("chipsy") || input.includes("lays")) {
  result += "🥔 Król wieczornych seansów — popcorn to za mało, Ty idziesz na grubo.\n"; matched = true;
}
if (input.includes("woda") || input.includes("żywiec")) {
  result += "💧 Minimalista z czystą duszą — życie bez bąbelków, ale z głębią.\n"; matched = true;
}
if (input.includes("papier toaletowy")) {
  result += "🧻 Strateg domowy — przewidujesz więcej niż giełdowy analityk.\n"; matched = true;
}
if (input.includes("mleko") || input.includes("łaciate")) {
  result += "🥛 Nostalgik dzieciństwa — kaszka z mlekiem to Twój comfort zone.\n"; matched = true;
}
if (input.includes("masło")) {
  result += "🧈 Miłośnik smarownej elegancji — dla Ciebie wszystko lepsze z tłuszczykiem.\n"; matched = true;
}
if (input.includes("lód") || input.includes("lody")) {
  result += "🍦 Łowca chwil — lubisz rozpływać się w przyjemnościach.\n"; matched = true;
}
if (input.includes("pomidor") || input.includes("passata")) {
  result += "🍅 Poeta smaku — tworzysz spaghetti jakby to była symfonia czerwieni.\n"; matched = true;
}
if (input.includes("makaron")) {
  result += "🍝 Romantyk prostoty — uczucie wyrażasz al dente.\n"; matched = true;
}
if (input.includes("ryż")) {
  result += "🍚 Stabilna jednostka — kochasz porządek i klejącą regularność.\n"; matched = true;
}
if (input.includes("serek wiejski")) {
  result += "🧺 Fit marzyciel — śniadanie z proteiną i planem na świat.\n"; matched = true;
}
if (input.includes("hummus")) {
  result += "🌱 Lewitujący hipster — eko, ale z humorem i pitą.\n"; matched = true;
}
if (input.includes("jogurt") || input.includes("zott")) {
  result += "🥄 Pogodna dusza — dla Ciebie śniadanie to rytuał czułości.\n"; matched = true;
}
if (input.includes("wafle ryżowe")) {
  result += "🍘 Perfekcyjny minimalista — przekąska bez hałasu i kalorii.\n"; matched = true;
}
if (input.includes("mięso") || input.includes("kurczak") || input.includes("schab")) {
  result += "🥩 Siła i tradycja — kuchnia u Ciebie zaczyna się od patelni.\n"; matched = true;
}
if (input.includes("kiełbasa")) {
  result += "🌭 Dusza ogniska — jesteś wszędzie tam, gdzie pachnie przygodą.\n"; matched = true;
}
if (input.includes("ziemniaki")) {
  result += "🥔 Stabilna podstawa — jesteś fundamentem domowego wszechświata.\n"; matched = true;
}
if (input.includes("sól") || input.includes("przyprawa")) {
  result += "🧂 Alchemik smaku — bez Ciebie nawet rosół byłby ciszą.\n"; matched = true;
}
if (input.includes("banany")) {
  result += "🍌 Optymista z witaminą — zawsze masz plan B(anan).\n"; matched = true;
}
if (input.includes("winogrona") || input.includes("arbuz")) {
  result += "🍉 Letni romantyk — smakujesz życie w cieniu hamaka.\n"; matched = true;
}
if (input.includes("pomarańcza") || input.includes("cytryna")) {
  result += "🍋 Zaskakująco świeży — cytrusowy realizm i sarkazm.\n"; matched = true;
}
if (input.includes("ser") || input.includes("gouda")) {
  result += "🧀 Król desek — i nie chodzi o surfing, tylko camembert.\n"; matched = true;
}
if (input.includes("śmietana") || input.includes("18%")) {
  result += "🥄 Rozkoszny sybaryta — kochasz, gdy dania są miękkie i przytulne.\n"; matched = true;
}
if (input.includes("jajka")) {
  result += "🥚 Architekt śniadań — Twoje życie to balans białka i chaosu.\n"; matched = true;
}
if (input.includes("szpinak") || input.includes("jarmuż")) {
  result += "🌿 Zielony mędrzec — zdrowy styl i instynkt ninja.\n"; matched = true;
}
if (input.includes("ogórki") || input.includes("kiszone")) {
  result += "🥒 Kwaskowy kontemplator — z zewnątrz zamknięty, w środku ferment emocji.\n"; matched = true;
}
if (input.includes("cukierki") || input.includes("gumy do żucia")) {
  result += "🍬 Wieczne dziecko — czasem zbyt słodki, zawsze do żucia.\n"; matched = true;
}
if (input.includes("boczek")) {
  result += "🥓 Rebel z patelni — nie boisz się tłuszczu i decyzji.\n"; matched = true;
}
if (input.includes("majonez")) {
  result += "🥫 Król emulsji — nawet kanapkę potrafisz zamienić w dzieło sztuki.\n"; matched = true;
}
if (input.includes("kabanos")) {
  result += "🥖 Snajper przekąsek — dyskretny, skuteczny, lekko dymiony.\n"; matched = true;
}
if (input.includes("płatki") || input.includes("corn flakes")) {
  result += "🥣 Nostalgik sobotniego poranka — Twoje życie to intro z kreskówki.\n"; matched = true;
}
if (input.includes("nutella") || input.includes("krem czekoladowy")) {
  result += "🍯 Emocjonalny pieszczoszek — Twoje palce znają smak dzieciństwa.\n"; matched = true;
}
if (input.includes("musztarda")) {
  result += "🌭 Odważny i pikantny — nie boisz się mocnych słów i sosów.\n"; matched = true;
}
if (input.includes("żel pod prysznic")) {
  result += "🚿 Zapachowy strateg — pachniesz lepiej niż własne decyzje.\n"; matched = true;
}
if (input.includes("proszek do prania")) {
  result += "👕 Tygrys logistyki — Twoja świeżość zaczyna się od bębna.\n"; matched = true;
}
if (input.includes("kasza") || input.includes("gryczana")) {
  result += "🥄 Poeta z ziarnem — sypki, ale głęboki.\n"; matched = true;
}
if (input.includes("bakalie") || input.includes("rodzynki")) {
  result += "🥜 Niespodzianka w cieście życia — słodki, a czasem kontrowersyjny.\n"; matched = true;
}
if (input.includes("ciastka") || input.includes("herbatniki")) {
  result += "🍪 Serdeczny duszek — gościnność i cukier zawsze pod ręką.\n"; matched = true;
}
if (input.includes("parówki")) {
  result += "🌭 Realista ekspresowy — obiady w 2 minuty, sentyment na zawsze.\n"; matched = true;
}
if (input.includes("bulion") || input.includes("kostka rosołowa")) {
  result += "🍵 Alchemik smaku — Twój rosół byłby w stanie uleczyć dzikiego tygrysa.\n"; matched = true;
}
if (input.includes("pizza") || input.includes("mrożona")) {
  result += "🍕 Hedonista tygodniowy — czwartek? Czas na ser.\n"; matched = true;
}
if (input.includes("chleb") || input.includes("kajzerka")) {
  result += "🍞 Stabilny fundament — nie zaczynasz dnia bez kromki i sensu.\n"; matched = true;
}
if (input.includes("zupa") || input.includes("barszcz")) {
  result += "🥄 Czuły opiekun — karmisz nie tylko brzuchy, ale i wspomnienia.\n"; matched = true;
}

if (input.includes("mrożonka") || input.includes("warzywa na patelnię")) {
  result += "❄️ Czasowy alchemik — Twoje obiady są błyskawiczne, ale z duszą.\n"; matched = true;
}
if (input.includes("ketchup") || input.includes("pudliszki")) {
  result += "🍅 Król dekadenckiego smaku — dla Ciebie nawet frytki są arystokracją.\n"; matched = true;
}
if (input.includes("kukurydza") || input.includes("mexican")) {
  result += "🌽 Słoneczny ekstrawertyk — wnosisz salsę tam, gdzie inni dają sól.\n"; matched = true;
}
if (input.includes("ananas")) {
  result += "🍍 Tropikalny kontrowersjonista — pizza z Tobą zawsze ma twist.\n"; matched = true;
}
if (input.includes("olej") || input.includes("oliwa")) {
  result += "🛢️ Gładki operator — zawsze ślizgasz się przez kuchnię z klasą.\n"; matched = true;
}
if (input.includes("mąka") || input.includes("pszenna")) {
  result += "🌾 Szlachetny piekarz domowy — budujesz relacje na zakwasie.\n"; matched = true;
}
if (input.includes("cukier")) {
  result += "🍚 Dosładzacz życia — nawet ironia ma z Tobą nutę wanilii.\n"; matched = true;
}
if (input.includes("miód")) {
  result += "🍯 Naturalna słodycz — jesteś złotem rozpuszczonym w herbacie życia.\n"; matched = true;
}
if (input.includes("lód w kostkach") || input.includes("kostki lodu")) {
  result += "🧊 Chłodny strateg — zimna głowa, gorące decyzje.\n"; matched = true;
}
if (input.includes("wino") || input.includes("merlot")) {
  result += "🍷 Szlachetny duszek — wieczory z Tobą smakują jak włoski zachód słońca.\n"; matched = true;
}
if (input.includes("whisky") || input.includes("johnnie walker")) {
  result += "🥃 Klasyk nocy — wiesz, że smak dojrzewa z charakterem.\n"; matched = true;
}
if (input.includes("piersiówka")) {
  result += "🥴 Party ninja — zawsze masz coś ukrytego w kieszeni z historią.\n"; matched = true;
}
if (input.includes("żelki")) {
  result += "🐻 Kolorowy freak — uśmiechasz się słodko nawet w korku.\n"; matched = true;
}
if (input.includes("wafelek") || input.includes("princessa")) {
  result += "🍘 Czuła kawiarenka — lubisz drobne radości między scenami dnia.\n"; matched = true;
}
if (input.includes("ciasto") || input.includes("gotowe do pieczenia")) {
  result += "🧁 Esteta domowego luksusu — pieczesz jakbyś wyznawał(a) miłość.\n"; matched = true;
}
if (input.includes("krem") || input.includes("dermokosmetyk")) {
  result += "🧴 Pielęgnator duszy i skóry — dbasz tam, gdzie inni zapominają.\n"; matched = true;
}
if (input.includes("chusteczki")) {
  result += "🧻 Empatyczny wojownik — gotów/a na łzy, smarki i wzruszenia.\n"; matched = true;
}
if (input.includes("suszarka") || input.includes("szczoteczka elektryczna")) {
  result += "⚙️ Cyfrowy esteta — Twoja łazienka śpiewa jak reklama.\n"; matched = true;
}
if (input.includes("bateria") || input.includes("akumulator")) {
  result += "🔋 Zawsze naładowany/a — energii Ci nie brak, ale ładowarki pilnujesz.\n"; matched = true;
}
if (input.includes("powerbank")) {
  result += "🔌 Nomada kontrolowany — możesz wszystko, byle z 57% baterii.\n"; matched = true;
}
if (input.includes("zeszyt") || input.includes("długopis")) {
  result += "📝 Kronikarz chaosu — życie zapisujesz, zanim Ci ucieknie.\n"; matched = true;
}
if (input.includes("zakreślacz")) {
  result += "🖍️ Kolorysta struktury — nawet nudne notatki z Tobą mają vibe.\n"; matched = true;
}
if (input.includes("taśma klejąca") || input.includes("klej")) {
  result += "📎 Łączysz światy — sklejki, słowa i czasem ludzi.\n"; matched = true;
}
if (input.includes("latarka") || input.includes("świeczka")) {
  result += "🕯️ Romantyk survivalu — jesteś światłem w przerwie dostaw.\n"; matched = true;
}
if (input.includes("podpałka") || input.includes("węgiel drzewny")) {
  result += "🔥 Opiekun ogniska — umiesz rozpalić wieczór (i serce).\n"; matched = true;
}
if (input.includes("szynka") || input.includes("salami")) {
  result += "🥓 Esteta wędlin — plasterek musi być cienki jak Twoje poczucie ironii.\n"; matched = true;
}
if (input.includes("filet") || input.includes("pierś z kurczaka")) {
  result += "🍗 Zdyscyplinowany rzeźbiarz ciała — gotujesz z kalkulatorem kalorii.\n"; matched = true;
}
if (input.includes("soja") || input.includes("tempeh")) {
  result += "🌱 Świadomy wybieracz — każde danie to manifest wartości.\n"; matched = true;
}
if (input.includes("baton") || input.includes("snickers")) {
  result += "🍫 Nocna przekąska emocji — kochasz, głodniejesz, działasz.\n"; matched = true;
}
if (input.includes("czipsy") || input.includes("crunch")) {
  result += "🥔 Życiowy chrupacz — wszystko rozwiążesz z paczką w dłoni.\n"; matched = true;
}
if (input.includes("energy drink") || input.includes("burn")) {
  result += "⚡ Nocny architekt deadline’ów — żyjesz w turbo harmonogramie.\n"; matched = true;
}
if (input.includes("serek topiony")) {
  result += "🧀 Grzeszna nostalgia — smak dzieciństwa i mikrofali.\n"; matched = true;
}
if (input.includes("ser feta")) {
  result += "🇬🇷 Letni wyznawca Grecji — Twoje sałatki są lepsze niż Instagram.\n"; matched = true;
}
if (input.includes("wrap")) {
  result += "🌯 Nomada lunchowa — wszystko zawijasz i ruszasz dalej.\n"; matched = true;
}
if (input.includes("mus owocowy")) {
  result += "🍎 Słodki ninja — czasem udajesz zdrowe, ale jesteś po prostu uroczy.\n"; matched = true;
}
if (input.includes("sok pomidorowy")) {
  result += "🧃 Minimalistyczny romantyk — picie warzyw to też uczucie.\n"; matched = true;
}
if (input.includes("keczup pikantny")) {
  result += "🌶️ Rebel z lodówki — przyprawiasz życie bez pytania.\n"; matched = true;
}
if (input.includes("pistacje") || input.includes("orzechy")) {
  result += "🥜 Skomplikowana przekąska — krucha, twarda i wybitnie wciągająca.\n"; matched = true;
}
if (input.includes("czosnek")) {
  result += "🧄 Mistyk kuchni — Twoje dania nie znają półśrodków.\n"; matched = true;
}
if (input.includes("imbir") || input.includes("kurkuma")) {
  result += "🌶️ Zdrowotny alchemik — herbata z Tobą to transformacja duszy.\n"; matched = true;
}
if (input.includes("serek homo") || input.includes("danio")) {
  result += "🥣 Uroczy nostalgik — deser po 22. to Twój rytuał od dzieciństwa.\n"; matched = true;
}
if (input.includes("czekolada gorzka")) {
  result += "🖤 Egzystencjalista z kakao — intensywnie, głęboko, z dystansem.\n"; matched = true;
}
if (input.includes("czekolada mleczna")) {
  result += "🥰 Słodki klasyk — przy Tobie świat topi się szybciej.\n"; matched = true;
}
if (input.includes("sałata") || input.includes("rukola")) {
  result += "🌿 Minimalista z pazurem — świeżość to Twoje drugie imię.\n"; matched = true;
}
if (input.includes("ogórek świeży")) {
  result += "🥒 Optymista spontaniczny — idealny dodatek do każdego nastroju.\n"; matched = true;
}
if (input.includes("paragon") && input.includes("konto")) {
  result += "🧾 Spożywczy filozof — analizujesz świat przez koszyk.\n"; matched = true;
}
if (input.includes("węgiel aktywny")) {
  result += "🧱 Cichy detoxer — czyścisz więcej niż lodówkę.\n"; matched = true;
}
if (input.includes("kaszka manna")) {
  result += "👶 Miękki romantyk — kochasz otulenie i smak dzieciństwa.\n"; matched = true;
}
if (input.includes("czyścik") || input.includes("szmatka")) {
  result += "🧽 Cichy bohater domu — nikt Cię nie widzi, ale wszystko dzięki Tobie błyszczy.\n"; matched = true;
}
if (input.includes("ziarna") || input.includes("granola")) {
  result += "🌾 Strukturalna dusza — wszystko w Tobie ma rytm i teksturę.\n"; matched = true;
}

    }
  }

  document.getElementById('result').innerText = result;
}
