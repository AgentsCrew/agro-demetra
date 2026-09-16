/**
 * AGRO DEMETRA — Каталог Торове & Биостимулатори (35 реални продукта)
 * Базирано на анализа на водещите марки: Yara, Valagro, Aglukon, Ecoculture, Plantela.
 */
window.AGRO_CATALOG_DATA = window.AGRO_CATALOG_DATA || [];

const FERTILIZERS = [
  {
    id: "yaramila-complex",
    name: "ЯраМила Комплекс NPK",
    title: "YaraMila Complex NPK 12-11-18 – хлоридо-чист комбиниран гранулиран тор",
    category: "fertilizers",
    categoryName: "Торове & Почви",
    price: 36.50,
    bgnPrice: 71.39,
    unit: "25 кг",
    brand: "yara",
    brandName: "Yara International (Норвегия)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["зеленчуци", "овощни", "лозя", "картофи"],
    cropsDisplay: "Зеленчуци, Овощни дървета, Лозя, Картофи, Ягоди",
    active: "NPK 12-11-18 + 2.7% MgO + 20% SO3 + Бор, Желязо, Манган, Цинк",
    formulation: "Гранули (Високоразтворими)",
    quarantine: "0 дни",
    reg: "ЕО ТОР",
    badge: "№1 NPK Гранула",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    desc: "Най-качественият основен тор за градинари и стопани. Изцяло на сулфатна основа (без хлор), с бавно и бързо действащ фосфор за максимален добив.",
    rates: [
      { val: 30000, label: "30-50 кг/дка (Предсеитбено или предразсадно внасяне)" },
      { val: 20000, label: "20-30 кг/дка (Пролетно подхранване на овощни и лозя)" }
    ],
    packSizes: [
      { label: "2 кг", price: 4.90, unit: "€ 4.90 / 2 кг" },
      { label: "5 кг", price: 9.80, unit: "€ 9.80 / 5 кг" },
      { label: "25 кг", price: 36.50, unit: "€ 36.50 / 25 кг", default: true }
    ],
    rating: 5.0,
    reviewsCount: 120,
    inStock: true
  },
  {
    id: "yaraliva-nitrabor",
    name: "ЯраЛива Нитрабор",
    title: "YaraLiva Nitrabor – гранулиран калциев нитрат с бор",
    category: "fertilizers",
    categoryName: "Торове & Почви",
    price: 24.50,
    bgnPrice: 47.92,
    unit: "25 кг",
    brand: "yara",
    brandName: "Yara International (Норвегия)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "зеленчуци", "овощни", "картофи"],
    cropsDisplay: "Домати, Пипер, Ябълки, Картофи, Зеле",
    active: "Азот (15.4% N) + Калций (25.6% CaO) + Бор (0.3% B)",
    formulation: "Гранули",
    quarantine: "0 дни",
    reg: "ЕО ТОР",
    badge: "Калций + Бор",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    desc: "Предпазва от върхово гниене при домати и пипер и от горчиви подкожни ядки при ябълки. Подобрява здравината и съхраняемостта на плодовете.",
    rates: [
      { val: 20000, label: "15-25 кг/дка (Почвено при цъфтеж и наедряване)" }
    ],
    packSizes: [
      { label: "5 кг", price: 6.90, unit: "€ 6.90 / 5 кг" },
      { label: "25 кг", price: 24.50, unit: "€ 24.50 / 25 кг", default: true }
    ],
    rating: 4.9,
    reviewsCount: 68,
    inStock: true
  },
  {
    id: "kristalon-special",
    name: "Кристалон Специален 18-18-18",
    title: "Кристалон Специален (Син) NPK 18-18-18 + микроелементи",
    category: "fertilizers",
    categoryName: "Торове & Почви",
    price: 6.80,
    bgnPrice: 13.30,
    unit: "1 кг",
    brand: "yara",
    brandName: "Yara Kristalon (Холандия)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "зеленчуци", "овощни", "лозя", "цветя"],
    cropsDisplay: "Всички култури и цветя",
    active: "NPK 18-18-18 + 3% MgO + B, Cu, Fe, Mn, Mo, Zn",
    formulation: "Кристален водоразтворим тор",
    quarantine: "0 дни",
    reg: "ЕО ТОР",
    badge: "Балансиран Тор",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80",
    desc: "100% водоразтворим тор за капково напояване и листно хранене. Идеален за активен вегетационен растеж на листната маса и корените.",
    rates: [
      { val: 300, label: "200-400 г/дка (Листно подхранване)" },
      { val: 1500, label: "1-2 кг/дка (С капковата система през 7-10 дни)" }
    ],
    packSizes: [
      { label: "1 кг", price: 6.80, unit: "€ 6.80 / 1 кг", default: true },
      { label: "25 кг", price: 68.00, unit: "€ 2.72 / кг" }
    ],
    rating: 5.0,
    reviewsCount: 95,
    inStock: true
  },
  {
    id: "kristalon-red",
    name: "Кристалон Червен 12-12-36",
    title: "Кристалон Червен NPK 12-12-36 – богат на калий за наедряване и узряване",
    category: "fertilizers",
    categoryName: "Торове & Почви",
    price: 6.90,
    bgnPrice: 13.50,
    unit: "1 кг",
    brand: "yara",
    brandName: "Yara Kristalon (Холандия)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "лозя", "овощни"],
    cropsDisplay: "Домати, Лозя, Овощни, Ягоди, Картофи",
    active: "NPK 12-12-36 + микроелементи",
    formulation: "Кристален водоразтворим тор",
    quarantine: "0 дни",
    reg: "ЕО ТОР",
    badge: "За Сладост и Цвят",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80",
    desc: "Високото съдържание на калий гарантира едри плодове, интензивен цвят, високо захарно съдържание и устойчивост на суша.",
    rates: [
      { val: 300, label: "300-500 г/дка (Листно при наедряване на плодовете)" },
      { val: 2000, label: "2-3 кг/дка (Капково напояване)" }
    ],
    packSizes: [
      { label: "1 кг", price: 6.90, unit: "€ 6.90 / 1 кг", default: true },
      { label: "25 кг", price: 69.50, unit: "€ 2.78 / кг" }
    ],
    rating: 4.9,
    reviewsCount: 81,
    inStock: true
  },
  {
    id: "kristalon-yellow",
    name: "Кристалон Жълт 13-40-13",
    title: "Кристалон Жълт NPK 13-40-13 – с 40% фосфор за мощна коренова система",
    category: "fertilizers",
    categoryName: "Торове & Почви",
    price: 7.20,
    bgnPrice: 14.08,
    unit: "1 кг",
    brand: "yara",
    brandName: "Yara Kristalon (Холандия)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "зеленчуци", "картофи"],
    cropsDisplay: "Разсад, Домати, Пипер, Картофи, Ягоди",
    active: "NPK 13-40-13 + микроелементи",
    formulation: "Кристален водоразтворим тор",
    quarantine: "0 дни",
    reg: "ЕО ТОР",
    badge: "За Вкореняване",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    desc: "Прилага се веднага след поникване или пресаждане за бързо стимулиране на корените и преди цъфтеж за залагане на повече завръзи.",
    rates: [
      { val: 200, label: "20-30 г в 10 л вода за поливане на разсад" },
      { val: 250, label: "250-300 г/дка (Листно третиране)" }
    ],
    packSizes: [
      { label: "1 кг", price: 7.20, unit: "€ 7.20 / 1 кг", default: true },
      { label: "25 кг", price: 72.00, unit: "€ 2.88 / кг" }
    ],
    rating: 4.9,
    reviewsCount: 54,
    inStock: true
  },
  {
    id: "wuxal-calcium",
    name: "Вуксал Калций",
    title: "Вуксал Калций – суспензионен листен тор с 24% CaO и азот",
    category: "fertilizers",
    categoryName: "Торове & Почви",
    price: 8.50,
    bgnPrice: 16.62,
    unit: "1 л",
    brand: "aglukon",
    brandName: "Aglukon (Германия)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "овощни", "зеленчуци"],
    cropsDisplay: "Домати, Пипер, Ябълки, Круши, Череши",
    active: "Калций (240 г/л CaO) + Азот (160 г/л) + Магнезий и микроелементи",
    formulation: "Суспензия (С прилепител)",
    quarantine: "0 дни",
    reg: "ЕО ТОР",
    badge: "Стоп Върхово Гниене",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    desc: "Най-усвоимият листен калций в Европа. Вградени буфери и адюванти гарантират 100% поемане без изгаряне на листата.",
    rates: [
      { val: 300, label: "300-500 мл/дка (През 10-14 дни от образуване на завръзите)" }
    ],
    packSizes: [
      { label: "250 мл", price: 3.20, unit: "€ 3.20 / 250 мл" },
      { label: "1 л", price: 8.50, unit: "€ 8.50 / 1 л", default: true },
      { label: "5 л", price: 38.00, unit: "€ 7.60 / л" }
    ],
    rating: 5.0,
    reviewsCount: 76,
    inStock: true
  },
  {
    id: "megafol",
    name: "Мегафол Антистрес",
    title: "Мегафол – биостимулатор с аминокиселини срещу измръзване, градушка и суша",
    category: "fertilizers",
    categoryName: "Торове & Почви",
    price: 9.90,
    bgnPrice: 19.36,
    unit: "250 мл",
    brand: "valagro",
    brandName: "Valagro (Италия) / Syngenta",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "зеленчуци", "овощни", "лозя", "житни"],
    cropsDisplay: "Всички земеделски култури при стрес",
    active: "Свободни аминокиселини и пролин (28%) + Бетаини + Витамини",
    formulation: "Течен биостимулатор",
    quarantine: "0 дни",
    reg: "Биостимулатор Регламент (ЕС)",
    badge: "Спасител Реколта",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80",
    desc: "Възстановява растенията след градушка, слана, суша или пестициден стрес за 48 часа. Активира клетъчното делене.",
    rates: [
      { val: 200, label: "150-250 мл/дка (При стресови условия и веднага след градушка)" }
    ],
    packSizes: [
      { label: "250 мл", price: 9.90, unit: "€ 9.90 / 250 мл", default: true },
      { label: "1 л", price: 27.50, unit: "€ 27.50 / 1 л" }
    ],
    rating: 5.0,
    reviewsCount: 88,
    inStock: true
  },
  {
    id: "radifarm",
    name: "Радифарм Вкоренител",
    title: "Радифарм – растителен биостимулатор за максимална коренова маса",
    category: "fertilizers",
    categoryName: "Торове & Почви",
    price: 14.50,
    bgnPrice: 28.36,
    unit: "250 мл",
    brand: "valagro",
    brandName: "Valagro (Италия) / Syngenta",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "зеленчуци", "овощни"],
    cropsDisplay: "Разсади, овощни фиданки, лози, цветя",
    active: "Екстракти от водорасли, стероли, цинк, аминокиселини",
    formulation: "Течен екстракт",
    quarantine: "0 дни",
    reg: "Биостимулатор",
    badge: "Мощни Корени",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    desc: "Осигурява 100% прихващане на засадения разсад и фиданки. Стимулира страничните коренови власинки.",
    rates: [
      { val: 250, label: "250-300 мл в 100 л вода (Поливане при разсаждане)" }
    ],
    packSizes: [
      { label: "250 мл", price: 14.50, unit: "€ 14.50 / 250 мл", default: true },
      { label: "1 л", price: 46.00, unit: "€ 46.00 / 1 л" }
    ],
    rating: 4.9,
    reviewsCount: 53,
    inStock: true
  },
  {
    id: "iron-chelate-edta",
    name: "Железен Хелат Fe-EDDHA 6%",
    title: "Хелатно Желязо 6% (Червен прах) – мигновено лечение на хлороза",
    category: "fertilizers",
    categoryName: "Торове & Почви",
    price: 5.50,
    bgnPrice: 10.76,
    unit: "100 г",
    brand: "manica",
    brandName: "Manica SpA / Tradecorp",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["лозя", "овощни", "домати"],
    cropsDisplay: "Лозя, Праскови, Круши, Домати, Цветя",
    active: "Желязо Fe-EDDHA 6% (4.8% орто-орто изомер)",
    formulation: "Микрогранули",
    quarantine: "0 дни",
    reg: "ЕО ТОР",
    badge: "Стоп Хлороза",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    desc: "Стабилен дори във силно варовити почви с pH до 9.0! Връща тъмнозеления цвят на пожълтелите листа само за няколко дни.",
    rates: [
      { val: 20, label: "10-20 г на корен (Поливане в кореновата зона при лози и овошки)" }
    ],
    packSizes: [
      { label: "100 г", price: 5.50, unit: "€ 5.50 / 100 г", default: true },
      { label: "1 кг", price: 29.00, unit: "€ 29.00 / 1 кг" }
    ],
    rating: 5.0,
    reviewsCount: 67,
    inStock: true
  },
  {
    id: "humustim",
    name: "Хумустим Органичен Тор",
    title: "Хумустим – натурален хуминов екстракт от червен калифорнийски червей",
    category: "fertilizers",
    categoryName: "Торове & Почви",
    price: 4.80,
    bgnPrice: 9.39,
    unit: "1 л",
    brand: "amitica",
    brandName: "Български Биопродукт",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["зеленчуци", "домати", "лозя", "овощни"],
    cropsDisplay: "Всички био градини, Зеленчуци, Овощни, Лозя",
    active: "Калиеви хумати и фулвокиселини от биохумус (над 60%)",
    formulation: "Течен концентрат",
    quarantine: "0 дни",
    reg: "Био сертификат",
    badge: "100% Български Био",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80",
    desc: "Обогатява почвата с полезна микрофлора, отключва блокираните хранителни вещества и стимулира вкусовите качества на плодовете.",
    rates: [
      { val: 100, label: "80-100 мл/дка (Листно подхранване през 14 дни)" },
      { val: 500, label: "500 мл/дка (Почвено поливане)" }
    ],
    packSizes: [
      { label: "1 л", price: 4.80, unit: "€ 4.80 / 1 л", default: true },
      { label: "5 л", price: 19.80, unit: "€ 3.96 / л" },
      { label: "10 л", price: 34.00, unit: "€ 3.40 / л" }
    ],
    rating: 4.9,
    reviewsCount: 92,
    inStock: true
  }
];

window.AGRO_CATALOG_DATA.push(...FERTILIZERS);
