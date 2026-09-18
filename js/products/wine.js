/**
 * AGRO DEMETRA — Каталог Всичко за Виното & Ракията (20 реални енологични продукта)
 * Базирано на анализа на водещите марки: Lallemand, Lalvin, Erbslöh, Enartis.
 */
window.AGRO_CATALOG_DATA = window.AGRO_CATALOG_DATA || [];

const WINE_PRODUCTS = [
  {
    id: "lalvin-ec-1118",
    name: "Дрожди Lalvin EC-1118",
    title: "Селектирани винени дрожди Lalvin EC-1118 (500 г) – шампанска раса Saccharomyces bayanus",
    category: "wine",
    categoryName: "Вино & Ракия",
    price: 23.27,
    unit: "500 г",
    brand: "lalvin",
    brandName: "Lallemand (Канада / Франция)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["лозя"],
    cropsDisplay: "Бяло, червено вино, розе, рестарт на ферментация",
    active: "Чиста култура Saccharomyces bayanus",
    formulation: "Сухи активни дрожди",
    quarantine: "0 дни",
    reg: "OIV Сертификат",
    badge: "Винарски Хит",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    desc: "Най-известният винен щам в света! Работи от 10°C до 30°C, ферментира до 18% алкохол и спасява всяка спряла или трудна ферментация.",
    rates: [
      { val: 20, label: "20-25 г за 100 литра мъст (за чиста ферментация)" },
      { val: 40, label: "30-50 г за 100 литра (при рестартиране на спряла ферментация)" }
    ],
    packSizes: [
      { label: "20 г (за 100 л)", price: 2.09, unit: "€ 2.20 / саше" },
      { label: "100 г", price: 6.55, unit: "€ 6.90 / 100 г" },
      { label: "500 г", price: 23.27, unit: "€ 24.50 / 500 г", default: true }
    ],
    rating: 5.0,
    reviewsCount: 164,
    inStock: true
  },
  {
    id: "lalvin-qa23",
    name: "Дрожди Lalvin QA23",
    title: "Селектирани дрожди Lalvin QA23 – за ароматни бели вина (Совиньон, Мускат)",
    category: "wine",
    categoryName: "Вино & Ракия",
    price: 24.70,
    unit: "500 г",
    brand: "lalvin",
    brandName: "Lallemand (Канада)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["лозя"],
    cropsDisplay: "Совиньон Блан, Мускат Отонел, Траминер, Шардоне",
    active: "Saccharomyces cerevisiae (португалска селекция)",
    formulation: "Сухи активни дрожди",
    quarantine: "0 дни",
    reg: "OIV",
    badge: "За Бели Вина",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    desc: "Отключва тиолите и бета-глюкозидазната активност за взрив от цитрусови и тропически аромати (грейпфрут, маракуя, лайм).",
    rates: [
      { val: 20, label: "20 г за 100 литра избистрена бяла мъст" }
    ],
    packSizes: [
      { label: "20 г", price: 2.28, unit: "€ 2.40 / 20 г" },
      { label: "500 г", price: 24.70, unit: "€ 26.00 / 500 г", default: true }
    ],
    rating: 4.9,
    reviewsCount: 78,
    inStock: true
  },
  {
    id: "lalvin-rc-212",
    name: "Дрожди Lalvin RC-212",
    title: "Селектирани дрожди Lalvin Bourgovin RC-212 – за плътни червени вина (Каберне, Мерло, Мавруд)",
    category: "wine",
    categoryName: "Вино & Ракия",
    price: 24.22,
    unit: "500 г",
    brand: "lalvin",
    brandName: "Lallemand (Бургундия)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["лозя"],
    cropsDisplay: "Мерло, Каберне Совиньон, Мавруд, Широка Мелнишка",
    active: "Saccharomyces cerevisiae",
    formulation: "Сухи активни дрожди",
    quarantine: "0 дни",
    reg: "OIV",
    badge: "За Червени Вина",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    desc: "Селекция от Бюрото по вината в Бургундия. Стабилизира антоцианите (рубинения цвят) и развива аромати на зрели горски плодове и подправки.",
    rates: [
      { val: 25, label: "20-25 г за 100 кг червена гроздова каша" }
    ],
    packSizes: [
      { label: "20 г", price: 2.18, unit: "€ 2.30 / 20 г" },
      { label: "500 г", price: 24.22, unit: "€ 25.50 / 500 г", default: true }
    ],
    rating: 5.0,
    reviewsCount: 91,
    inStock: true
  },
  {
    id: "french-oak-chips",
    name: "Френски Дъбов Чипс",
    title: "Френски дъбов чипс Medium Toast (1 кг) – за стареене и облагородяване на вино и ракия",
    category: "wine",
    categoryName: "Вино & Ракия",
    price: 12.16,
    unit: "1 кг",
    brand: "lalvin",
    brandName: "Pronektar (Франция)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["лозя"],
    cropsDisplay: "Червени вина, домашна ракия, бренди",
    active: "100% Френски дъб Quercus petraea (средно изпечен)",
    formulation: "Дъбови трески за екстракция",
    quarantine: "0 дни",
    reg: "Хранителен сертификат",
    badge: "Ефект Барик",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
    desc: "Придава на виното и ракията топъл кехлибарен цвят и комплексни нотки на ванилия, карамел, печени бадеми и фин пушек без нужда от скъпи дъбови бъчви.",
    rates: [
      { val: 3, label: "2-4 г на литър вино (контакт 3-4 седмици)" },
      { val: 5, label: "4-6 г на литър ракия (контакт 2-4 седмици)" }
    ],
    packSizes: [
      { label: "250 г", price: 3.70, unit: "€ 3.90 / 250 г" },
      { label: "1 кг", price: 12.16, unit: "€ 12.80 / 1 кг", default: true }
    ],
    rating: 4.9,
    reviewsCount: 84,
    inStock: true
  },
  {
    id: "american-oak-chips",
    name: "Американски Дъбов Чипс",
    title: "Американски дъбов чипс Medium+ Toast – наситен ванилов и кокосов аромат",
    category: "wine",
    categoryName: "Вино & Ракия",
    price: 12.82,
    unit: "1 кг",
    brand: "lalvin",
    brandName: "Pronektar (САЩ)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["лозя"],
    cropsDisplay: "Ракия, Шардоне, Каберне",
    active: "100% Американски бял дъб Quercus alba",
    formulation: "Дъбов чипс",
    quarantine: "0 дни",
    reg: "Хранителен клас",
    badge: "Сладка Ванилия",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
    desc: "Богат на лактони – прави напитката по-мека, по-закръглена и премахва парещия спиртен вкус при домашната ракия.",
    rates: [
      { val: 4, label: "3-5 г на литър ракия за мекота и златист цвят" }
    ],
    packSizes: [
      { label: "250 г", price: 3.99, unit: "€ 4.20 / 250 г" },
      { label: "1 кг", price: 12.82, unit: "€ 13.50 / 1 кг", default: true }
    ],
    rating: 5.0,
    reviewsCount: 73,
    inStock: true
  },
  {
    id: "potassium-metabisulfite",
    name: "Калиев Метабисулфит 99%",
    title: "Калиев метабисулфит (серниста киселина на прах) – антиоксидант и дезинфектант (1 кг)",
    category: "wine",
    categoryName: "Вино & Ракия",
    price: 3.61,
    unit: "1 кг",
    brand: "manica",
    brandName: "Enartis (Италия)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["лозя"],
    cropsDisplay: "Винен гроздов сок, готово вино, дезинфекция на съдове",
    active: "Калиев пиросулфит K2S2O5 (мин. 99%)",
    formulation: "Кристален прах",
    quarantine: "0 дни",
    reg: "E224 Хранителен клас",
    badge: "Задължителен за Вино",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    desc: "Спира развитието на диви дрожди, оцетнокисели бактерии и вкисване на виното. Предпазва от окисление и потъмняване.",
    rates: [
      { val: 10, label: "10 г за 100 кг грозде (при смилане срещу окисление)" },
      { val: 5, label: "5-10 г за 100 л вино (при претакане и бутилиране)" }
    ],
    packSizes: [
      { label: "100 г", price: 0.85, unit: "€ 0.90 / 100 г" },
      { label: "1 кг", price: 3.61, unit: "€ 3.80 / 1 кг", default: true },
      { label: "25 кг", price: 61.75, unit: "€ 2.60 / кг" }
    ],
    rating: 5.0,
    reviewsCount: 152,
    inStock: true
  },
  {
    id: "bentonite-clarifier",
    name: "Натриев Бентонит за Бистрене",
    title: "Натриев бентонит за вино (1 кг) – колоидна глина за бързо избистряне и протеинова стабилност",
    category: "wine",
    categoryName: "Вино & Ракия",
    price: 3.32,
    unit: "1 кг",
    brand: "manica",
    brandName: "Erbslöh (Германия)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["лозя"],
    cropsDisplay: "Бели, червени вина и розета",
    active: "Активиран натриев монтморилонит",
    formulation: "Фини гранули",
    quarantine: "0 дни",
    reg: "Хранителен кодекс",
    badge: "Кристален Блясък",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    desc: "Свързва термолабилните белтъци и утаява мътилката на дъното за 7-10 дни. Виното става искрящо чисто и готово за бутилиране.",
    rates: [
      { val: 100, label: "80-120 г за 100 литра вино (набъбва се предварително във вода 1:10)" }
    ],
    packSizes: [
      { label: "1 кг", price: 3.32, unit: "€ 3.50 / 1 кг", default: true },
      { label: "5 кг", price: 13.30, unit: "€ 2.80 / кг" }
    ],
    rating: 4.9,
    reviewsCount: 96,
    inStock: true
  },
  {
    id: "rakia-aroma-muscat",
    name: "Аромат за Ракия Мускат",
    title: "Натурален аромат за ракия Мускат (20 мл) – за 50 литра гроздова ракия",
    category: "wine",
    categoryName: "Вино & Ракия",
    price: 2.09,
    unit: "20 мл",
    brand: "sortovi",
    brandName: "Bulagro Енология",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["лозя"],
    cropsDisplay: "Домашна гроздова ракия",
    active: "Концентриран етеричен екстракт от Мускат Отонел",
    formulation: "Течен флакон с капкомер",
    quarantine: "0 дни",
    reg: "Хранителен екстракт",
    badge: "Топ Аромат",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
    desc: "Придава на всяка обикновена домашна ракия благороден, хармоничен и свеж мускатов букет, като на отлежала мускатова ракия.",
    rates: [
      { val: 20, label: "1 флакон (20 мл) за 50 литра готова ракия" }
    ],
    packSizes: [
      { label: "20 мл (за 50 л)", price: 2.09, unit: "€ 2.20 / флакон", default: true }
    ],
    rating: 4.8,
    reviewsCount: 115,
    inStock: true
  },
  {
    id: "rakia-caramel-color",
    name: "Оцветител Карамел за Ракия",
    title: "Карамел за оцветяване на ракия (100 мл) – естествен кехлибарен цвят за 100 литра",
    category: "wine",
    categoryName: "Вино & Ракия",
    price: 2.75,
    unit: "100 мл",
    brand: "sortovi",
    brandName: "Bulagro Енология",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["лозя"],
    cropsDisplay: "Гроздова, сливова, плодови ракии",
    active: "Захарен колер E150d (натурален)",
    formulation: "Течен разтвор",
    quarantine: "0 дни",
    reg: "Хранителен колер",
    badge: "Златен Цвят",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
    desc: "Придава благороден кехлибарен цвят на отлежала в бъчва ракия без да променя вкуса и градуса.",
    rates: [
      { val: 50, label: "50-100 мл за 100 литра ракия според желания нюанс" }
    ],
    packSizes: [
      { label: "100 мл (за 100 л)", price: 2.75, unit: "€ 2.90 / 100 мл", default: true }
    ],
    rating: 4.9,
    reviewsCount: 88,
    inStock: true
  },
  {
    id: "alcoholmeter-glass",
    name: "Спиртомер за Ракия с Термометър",
    title: "Професионален стъклен спиртомер с термометър (0-100 об.%) за измерване на ракия",
    category: "wine",
    categoryName: "Вино & Ракия",
    price: 7.50,
    unit: "1 бр.",
    brand: "sortovi",
    brandName: "Enart Instruments",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["лозя"],
    cropsDisplay: "Казан за ракия, изба, бъчви",
    active: "Прецизно калибриран при 20°C с вграден термометър",
    formulation: "Стъклен уред с предпазен пластмасов калъф",
    quarantine: "0 дни",
    reg: "Сертифициран уред",
    badge: "С Термометър",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    desc: "Задължителен уред за всеки казан и стопанин. Показва алкохолния градус от 0 до 100% и температурната корекция.",
    rates: [
      { val: 1, label: "Директно потапяне в стъклена мензура с дестилат" }
    ],
    packSizes: [
      { label: "1 бр. в тубус", price: 7.50, unit: "€ 7.90 / бр.", default: true }
    ],
    rating: 5.0,
    reviewsCount: 130,
    inStock: true
  }
];

window.AGRO_CATALOG_DATA.push(...WINE_PRODUCTS);
