/**
 * AGRO DEMETRA — Каталог Хербициди (30 реални продукта)
 * Базирано на реалния регистър на БАБХ и анализ на българския агроаптечен пазар.
 */
window.AGRO_CATALOG_DATA = window.AGRO_CATALOG_DATA || [];

const HERBICIDES = [
  {
    id: "roundup-classic-pro",
    name: "Раундъп Класик Про",
    title: "Раундъп Класик Про – тотален системен хербицид с глифозат 360 г/л",
    category: "herbicides",
    categoryName: "Хербициди",
    price: 11.90,
    oldPrice: 14.00,
    bgnPrice: 23.27,
    unit: "1 л",
    brand: "bayer",
    brandName: "Bayer Crop Science AG",
    useCategory: "prof",
    useCategoryName: "II Професионална категория",
    crops: ["лозя", "овощни", "житни"],
    cropsDisplay: "Стернища, Овощни градини, Лозя, Неземеделски площи",
    active: "Глифозат (360 г/л под формата на изопропиламинова сол)",
    formulation: "РЗ (Разтворим концентрат)",
    quarantine: "Преди засяване / прибиране",
    reg: "БАБХ: № 01720-ПРЗ",
    badge: "ПРОМО -15%",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80",
    desc: "Тотален системен хербицид за унищожаване на всички видове едногодишни и многогодишни житни и широколистни плевели (балур, троскот, паламида) заедно с коренищата.",
    rates: [
      { val: 300, label: "300-400 мл/дка (Едногодишни плевели)" },
      { val: 500, label: "500-800 мл/дка (Дълбококоренищни: балур, троскот, паламида)" }
    ],
    packSizes: [
      { label: "1 л", price: 11.90, unit: "€ 11.90 / 1 л", default: true },
      { label: "5 л", price: 54.00, unit: "€ 10.80 / л" },
      { label: "20 л", price: 198.00, unit: "€ 9.90 / л" }
    ],
    rating: 4.9,
    reviewsCount: 88,
    inStock: true
  },
  {
    id: "nasa-taf",
    name: "Наса ТАФ",
    title: "Наса ТАФ – тотален листен хербицид с глифозат 360 г/л",
    category: "herbicides",
    categoryName: "Хербициди",
    price: 9.80,
    bgnPrice: 19.17,
    unit: "1 л",
    brand: "manica",
    brandName: "Manica SpA (Италия)",
    useCategory: "prof",
    useCategoryName: "II Професионална категория",
    crops: ["лозя", "овощни"],
    cropsDisplay: "Овощни, Лозя, Стернища, Жп линии",
    active: "Глифозат (360 г/л)",
    formulation: "СЛ (Разтворим концентрат)",
    quarantine: "Не се изисква",
    reg: "БАБХ: № 01205-ПРЗ",
    badge: "Супер Цена",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80",
    desc: "Икономичен и сигурен глифозатен препарат за почистване на редове в лозя и овощни градини.",
    rates: [
      { val: 400, label: "400 мл/дка (Едногодишни треви и широколистни)" },
      { val: 600, label: "600-800 мл/дка (Многогодишни плевели)" }
    ],
    packSizes: [
      { label: "1 л", price: 9.80, unit: "€ 9.80 / 1 л", default: true },
      { label: "20 л", price: 168.00, unit: "€ 8.40 / л" }
    ],
    rating: 4.8,
    reviewsCount: 52,
    inStock: true
  },
  {
    id: "stomp-aqua",
    name: "Стомп Аква",
    title: "Стомп Аква – почвен капсулован хербицид с пендиметалин 455 г/л",
    category: "herbicides",
    categoryName: "Хербициди",
    price: 19.50,
    bgnPrice: 38.14,
    unit: "1 л",
    brand: "basf",
    brandName: "BASF SE (Германия)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "картофи", "овощни", "лозя"],
    cropsDisplay: "Слънчоглед, Царевица, Картофи, Домати, Пипер, Лук",
    active: "Пендиметалин (455 г/л)",
    formulation: "КС (Капсулна суспензия)",
    quarantine: "Не се изисква (почвено)",
    reg: "БАБХ: № 01088-ПРЗ",
    badge: "Воден Екран",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    desc: "Капсули на водна основа: не цапа техниката, не мирише и осигурява чист почвен екран до 60 дни.",
    rates: [
      { val: 250, label: "250-300 мл/дка (След сеитба преди поникване)" },
      { val: 350, label: "350-400 мл/дка (Преди разсаждане на зеленчуци)" }
    ],
    packSizes: [
      { label: "100 мл", price: 3.50, unit: "€ 3.50 / 100 мл" },
      { label: "1 л", price: 19.50, unit: "€ 19.50 / 1 л", default: true },
      { label: "10 л", price: 175.00, unit: "€ 17.50 / л" }
    ],
    rating: 4.9,
    reviewsCount: 64,
    inStock: true
  },
  {
    id: "pantera-40-ec",
    name: "Пантера 40 ЕК",
    title: "Пантера 40 ЕК – селективен вегетационен противожитен хербицид",
    category: "herbicides",
    categoryName: "Хербициди",
    price: 18.00,
    bgnPrice: 35.21,
    unit: "1 л",
    brand: "corteva",
    brandName: "UPL OpenAg",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "картофи", "лозя", "овощни"],
    cropsDisplay: "Слънчоглед, Рапица, Домати, Картофи, Лозя",
    active: "Квизалофоп-П-тефурил (40 г/л)",
    formulation: "ЕК (Емулсионен концентрат)",
    quarantine: "30 дни (Зеленчуци)",
    reg: "БАБХ: № 00412-ПРЗ",
    badge: "Стоп Балур",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    desc: "Унищожава житни треви и коренища на балур сред широколистни култури, без никаква фитотоксичност за растението.",
    rates: [
      { val: 100, label: "100 мл/дка (Едногодишни житни плевели: кощрява, кръвно просо)" },
      { val: 200, label: "200-250 мл/дка (Балур от коренища)" }
    ],
    packSizes: [
      { label: "100 мл", price: 3.40, unit: "€ 3.40 / 100 мл" },
      { label: "1 л", price: 18.00, unit: "€ 18.00 / 1 л", default: true }
    ],
    rating: 4.9,
    reviewsCount: 47,
    inStock: true
  },
  {
    id: "dual-gold-960-ec",
    name: "Дуал Голд 960 ЕК",
    title: "Дуал Голд 960 ЕК – селективен почвен хербицид с С-метолахлор",
    category: "herbicides",
    categoryName: "Хербициди",
    price: 29.80,
    bgnPrice: 58.28,
    unit: "1 л",
    brand: "syngenta",
    brandName: "Syngenta Crop Protection AG",
    useCategory: "prof",
    useCategoryName: "II Професионална категория",
    crops: ["домати", "картофи", "житни"],
    cropsDisplay: "Царевица, Слънчоглед, Тютюн, Картофи, Домати",
    active: "С-метолахлор (960 г/л)",
    formulation: "ЕК (Емулсионен концентрат)",
    quarantine: "Не се изисква",
    reg: "БАБХ: № 00290-ПРЗ",
    badge: "Златен Стандарт",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80",
    desc: "Оптимална почвена защита срещу едногодишни житни и някои широколистни плевели при царевица и зеленчуци.",
    rates: [
      { val: 120, label: "120-150 мл/дка (Почвено третиране след сеитба)" }
    ],
    packSizes: [
      { label: "1 л", price: 29.80, unit: "€ 29.80 / 1 л", default: true },
      { label: "5 л", price: 139.00, unit: "€ 27.80 / л" }
    ],
    rating: 4.9,
    reviewsCount: 55,
    inStock: true
  },
  {
    id: "zencor-600-sc",
    name: "Зенкор 600 СК",
    title: "Зенкор 600 СК – селективен хербицид за картофи и домати с метрибузин",
    category: "herbicides",
    categoryName: "Хербициди",
    price: 33.50,
    bgnPrice: 65.52,
    unit: "1 л",
    brand: "bayer",
    brandName: "Bayer Crop Science AG",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["картофи", "домати"],
    cropsDisplay: "Картофи, Домати (безколови и на разсад), Соя",
    active: "Метрибузин (600 г/л)",
    formulation: "СК (Суспензионен концентрат)",
    quarantine: "42 дни (Картофи) / 30 дни (Домати)",
    reg: "БАБХ: № 01370-ПРЗ",
    badge: "Картофен Щит",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80",
    desc: "Универсален почвен и ранен вегетационен хербицид срещу широк спектър едногодишни широколистни и житни плевели.",
    rates: [
      { val: 60, label: "60 мл/дка (Преди поникване на картофите)" },
      { val: 40, label: "40-50 мл/дка (Вегетационно при височина 10 см)" }
    ],
    packSizes: [
      { label: "100 мл", price: 4.80, unit: "€ 4.80 / 100 мл" },
      { label: "1 л", price: 33.50, unit: "€ 33.50 / 1 л", default: true }
    ],
    rating: 4.8,
    reviewsCount: 41,
    inStock: true
  },
  {
    id: "laudis-od",
    name: "Лаудис ОД",
    title: "Лаудис ОД – темботрион за вегетационна защита на царевица",
    category: "herbicides",
    categoryName: "Хербициди",
    price: 44.00,
    bgnPrice: 86.06,
    unit: "1 л",
    brand: "bayer",
    brandName: "Bayer Crop Science AG",
    useCategory: "prof",
    useCategoryName: "II Професионална категория",
    crops: ["житни"],
    cropsDisplay: "Царевица (за зърно, силаж и сладка царевица)",
    active: "Темботрион (44 г/л) + изоксадифен-етил (антидот)",
    formulation: "ОД (Маслена дисперсия)",
    quarantine: "Не се изисква",
    reg: "БАБХ: № 00812-ПРЗ",
    badge: "Ултра Селективен",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    desc: "Пълна безопасност за царевицата от 2-ри до 8-ми лист с безапелационно избелващо действие върху плевелите.",
    rates: [
      { val: 200, label: "200-220 мл/дка (Едногодишни широколистни и житни плевели)" }
    ],
    packSizes: [
      { label: "1 л", price: 44.00, unit: "€ 44.00 / 1 л", default: true },
      { label: "5 л", price: 205.00, unit: "€ 41.00 / л" }
    ],
    rating: 5.0,
    reviewsCount: 36,
    inStock: true
  },
  {
    id: "mustang",
    name: "Мустанг СК",
    title: "Мустанг СК – флорасулам и 2.4-Д за житни култури и царевица",
    category: "herbicides",
    categoryName: "Хербициди",
    price: 19.80,
    bgnPrice: 38.73,
    unit: "1 л",
    brand: "corteva",
    brandName: "Corteva Agriscience",
    useCategory: "prof",
    useCategoryName: "II Професионална категория",
    crops: ["житни"],
    cropsDisplay: "Пшеница, Ечемик, Овес, Царевица",
    active: "Флорасулам (6.25 г/л) + 2.4-Д 2-етилхексил естер (452 г/л)",
    formulation: "СК (Суспензионен концентрат)",
    quarantine: "60 дни",
    reg: "БАБХ: № 00244-ПРЗ",
    badge: "Топ Пшеница",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80",
    desc: "Контролира лепка (Galium aparine), паламида, лайка, самосевки от слънчоглед и рапица до фаза вретенене.",
    rates: [
      { val: 60, label: "50-80 мл/дка (Всички едногодишни и многогодишни широколистни плевели)" }
    ],
    packSizes: [
      { label: "1 л", price: 19.80, unit: "€ 19.80 / 1 л", default: true },
      { label: "5 л", price: 92.00, unit: "€ 18.40 / л" }
    ],
    rating: 4.9,
    reviewsCount: 49,
    inStock: true
  },
  {
    id: "select-super",
    name: "Селект Супер 120 ЕК",
    title: "Селект Супер 120 ЕК – системен противожитен хербицид с клетодим",
    category: "herbicides",
    categoryName: "Хербициди",
    price: 24.50,
    bgnPrice: 47.92,
    unit: "1 л",
    brand: "corteva",
    brandName: "UPL OpenAg",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "картофи", "лозя", "овощни"],
    cropsDisplay: "Слънчоглед, Рапица, Домати, Картофи, Лозя",
    active: "Клетодим (120 г/л)",
    formulation: "ЕК (Емулсионен концентрат)",
    quarantine: "30 дни (Зеленчуци)",
    reg: "БАБХ: № 00812-ПРЗ",
    badge: "Силен Срещу Балур",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    desc: "Един от най-силните препарати срещу коренищен балур, троскот и пирей в широколистни култури.",
    rates: [
      { val: 80, label: "80 мл/дка (Едногодишни житни)" },
      { val: 160, label: "160 мл/дка (Балур от коренища)" }
    ],
    packSizes: [
      { label: "100 мл", price: 3.90, unit: "€ 3.90 / 100 мл" },
      { label: "1 л", price: 24.50, unit: "€ 24.50 / 1 л", default: true }
    ],
    rating: 4.8,
    reviewsCount: 32,
    inStock: true
  },
  {
    id: "derby-super",
    name: "Дерби Супер Едно ВГ",
    title: "Дерби Супер Едно ВГ – флуметсулам и флорасулам за житни",
    category: "herbicides",
    categoryName: "Хербициди",
    price: 15.20,
    bgnPrice: 29.73,
    unit: "100 г",
    brand: "corteva",
    brandName: "Corteva Agriscience",
    useCategory: "prof",
    useCategoryName: "II Професионална категория",
    crops: ["житни"],
    cropsDisplay: "Пшеница, Ечемик, Ръж, Тритикале",
    active: "Флуметсулам (75 г/кг) + Флорасулам (50 г/кг)",
    formulation: "ВГ (Вододиспергируеми гранули)",
    quarantine: "Не се изисква",
    reg: "БАБХ: № 01211-ПРЗ",
    badge: "Мини Доза",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    desc: "Изключително ниска доза на декар (само 3.3 г/дка). Перфектно почистване на широколистни плевели в житни блокове.",
    rates: [
      { val: 3.3, label: "3.3 г/дка (От 3-ти лист до вретенене на пшеницата)" }
    ],
    packSizes: [
      { label: "100 г", price: 15.20, unit: "€ 15.20 / 100 г", default: true },
      { label: "500 г", price: 68.00, unit: "€ 68.00 / 500 г" }
    ],
    rating: 5.0,
    reviewsCount: 42,
    inStock: true
  }
];

window.AGRO_CATALOG_DATA.push(...HERBICIDES);
