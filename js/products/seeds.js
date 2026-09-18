/**
 * AGRO DEMETRA — Каталог Семена & Разсади (30 реални сорта)
 * Базирано на селекцията на Института по зеленчукови култури Марица, Сортови Семена и Флориан.
 */
window.AGRO_CATALOG_DATA = window.AGRO_CATALOG_DATA || [];

const SEEDS = [
  {
    id: "tomato-rozovo-sarce",
    name: "Семена Домати Розово сърце БГ",
    title: "Семена за Домати Розово сърце БГ – традиционен едър сорт (1 г / ~250 семена)",
    category: "seeds",
    categoryName: "Семена & Картофи",
    price: 2.09,
    unit: "1 г",
    brand: "sortovi",
    brandName: "Сортови Семена БГ",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати"],
    cropsDisplay: "Оранжерии и открито поле",
    active: "Чистота: 99% / Кълняемост: 92%",
    formulation: "Сертифицирани семена",
    quarantine: "0 дни",
    reg: "ИАСАС Регистър",
    badge: "Български Сорт",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    desc: "Любимият традиционен български гигантски розов домат с форма на сърце. Плодовете достигат 400-800 грама, с тънка ципа, малко семена и несравнима сладост.",
    rates: [
      { val: 30, label: "25-30 г семена за 1 декар разсад (3 500 растения)" }
    ],
    packSizes: [
      { label: "1 г (~250 сем.)", price: 2.09, unit: "€ 2.20 / пакет", default: true },
      { label: "5 г", price: 7.13, unit: "€ 7.50 / 5 г" },
      { label: "50 г", price: 39.90, unit: "€ 42.00 / 50 г" }
    ],
    rating: 5.0,
    reviewsCount: 145,
    inStock: true
  },
  {
    id: "tomato-rugby-f1",
    name: "Семена Домати Ръгби F1",
    title: "Семена Домати Ръгби F1 (Геосем) – ранен хибрид с форма на сърце/ръгби топка",
    category: "seeds",
    categoryName: "Семена & Картофи",
    price: 4.56,
    unit: "50 семена",
    brand: "sortovi",
    brandName: "Геосемселект БГ",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати"],
    cropsDisplay: "Оранжерии и ранно производство на открито",
    active: "Чистота: 99.5% / Кълняемост: 96%",
    formulation: "Професионални семена F1",
    quarantine: "0 дни",
    reg: "ИАСАС Регистър",
    badge: "№1 Ранен Домат",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    desc: "Най-търсеният български хибрид за оранжерии. Изключително ранен, устойчив на тютюнева мозайка и вертицилиум, с плътно розе месо без зелен пръстен.",
    rates: [
      { val: 25, label: "20-25 г за декар (засаждане 80х40 см)" }
    ],
    packSizes: [
      { label: "50 семена", price: 4.56, unit: "€ 4.80 / пакет", default: true },
      { label: "250 семена", price: 17.95, unit: "€ 18.90 / 250 бр." },
      { label: "1000 семена", price: 58.90, unit: "€ 62.00 / 1000 бр." }
    ],
    rating: 5.0,
    reviewsCount: 118,
    inStock: true
  },
  {
    id: "tomato-ideal",
    name: "Семена Домати Идеал",
    title: "Семена за Домати Идеал – автентичният български класически сорт",
    category: "seeds",
    categoryName: "Семена & Картофи",
    price: 1.71,
    unit: "1 г",
    brand: "sortovi",
    brandName: "Сортови Семена БГ",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати"],
    cropsDisplay: "Дворни градини и открито поле",
    active: "Чистота: 99% / Кълняемост: 90%",
    formulation: "Семена за разсад",
    quarantine: "0 дни",
    reg: "ИАСАС Регистър",
    badge: "Класика от 1938 г.",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    desc: "Еталонът за доматен вкус в България. Червен, с наситен баланс между киселинност и сладост, ароматен и изключително сочен.",
    rates: [
      { val: 30, label: "30 г за 1 декар разсад" }
    ],
    packSizes: [
      { label: "1 г", price: 1.71, unit: "€ 1.80 / 1 г", default: true },
      { label: "5 г", price: 5.89, unit: "€ 6.20 / 5 г" }
    ],
    rating: 4.9,
    reviewsCount: 89,
    inStock: true
  },
  {
    id: "cucumber-gergana",
    name: "Семена Краставици Гергана",
    title: "Семена Краставици Гергана – дългоплодна българска салатна краставица (3 г)",
    category: "seeds",
    categoryName: "Семена & Картофи",
    price: 1.52,
    unit: "3 г",
    brand: "sortovi",
    brandName: "Сортови Семена БГ",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати"],
    cropsDisplay: "Оранжерии и градини на открито",
    active: "Чистота: 99% / Кълняемост: 94%",
    formulation: "Сортови семена",
    quarantine: "0 дни",
    reg: "ИАСАС",
    badge: "Без Горчивина",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    desc: "Дължина 28-33 см, тъмнозелена с редки брадавици. Никога не нагарча, с крехка кора и деликатен свеж аромат.",
    rates: [
      { val: 150, label: "120-150 г семена на декар (директна сеитба)" }
    ],
    packSizes: [
      { label: "3 г (~100 сем.)", price: 1.52, unit: "€ 1.60 / пакет", default: true },
      { label: "10 г", price: 3.99, unit: "€ 4.20 / 10 г" }
    ],
    rating: 4.9,
    reviewsCount: 97,
    inStock: true
  },
  {
    id: "gherkin-megyer-f1",
    name: "Корнишони Мегйер F1",
    title: "Семена Корнишони Megyer F1 – партенокарпен хибрид без горчивина за консервиране",
    category: "seeds",
    categoryName: "Семена & Картофи",
    price: 3.70,
    unit: "1 г",
    brand: "sortovi",
    brandName: "ZKI (Унгария)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати"],
    cropsDisplay: "Конструкции на открито и полиетилен",
    active: "Чистота: 99.8% / Кълняемост: 96%",
    formulation: "Хибрид F1",
    quarantine: "0 дни",
    reg: "Европейски каталог",
    badge: "Идеален за Буркани",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    desc: "Високодобивен партенокарпен корнишон (не се нуждае от пчели). Плодовете остават стегнати и хрупкави след стерилизация.",
    rates: [
      { val: 100, label: "80-100 г за декар при телена конструкция" }
    ],
    packSizes: [
      { label: "1 г", price: 3.70, unit: "€ 3.90 / 1 г", default: true },
      { label: "5 г", price: 13.77, unit: "€ 14.50 / 5 г" }
    ],
    rating: 5.0,
    reviewsCount: 62,
    inStock: true
  },
  {
    id: "pepper-kurtovska-kapiya",
    name: "Пипер Куртовска капия 1619",
    title: "Семена Пипер Куртовска капия 1619 – меден слажък пипер за печене (2 г)",
    category: "seeds",
    categoryName: "Семена & Картофи",
    price: 1.80,
    unit: "2 г",
    brand: "sortovi",
    brandName: "ИЗК Марица / Сортови Семена",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати"],
    cropsDisplay: "Открито поле и оранжерии",
    active: "Чистота: 99% / Кълняемост: 91%",
    formulation: "Сортови семена",
    quarantine: "0 дни",
    reg: "ИАСАС",
    badge: "Топ Печене & Лютеница",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    desc: "Номер 1 за лютеници, консерви и печени чушки! Двувърха, месеста чушка (до 6-8 мм дебелина на стената), лесна за белене.",
    rates: [
      { val: 150, label: "120-150 г семена за декар разсад" }
    ],
    packSizes: [
      { label: "2 г (~300 сем.)", price: 1.80, unit: "€ 1.90 / пакет", default: true },
      { label: "10 г", price: 6.17, unit: "€ 6.50 / 10 г" }
    ],
    rating: 5.0,
    reviewsCount: 133,
    inStock: true
  },
  {
    id: "cabbage-kyose-17",
    name: "Семена Зеле Кьосе 17",
    title: "Семена Зеле Кьосе 17 – най-добрият сорт за кисело зеле и каца (3 г)",
    category: "seeds",
    categoryName: "Семена & Картофи",
    price: 1.61,
    unit: "3 г",
    brand: "sortovi",
    brandName: "Сортови Семена БГ",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["зеленчуци"],
    cropsDisplay: "Късно производство на открито",
    active: "Чистота: 99% / Кълняемост: 93%",
    formulation: "Сортови семена",
    quarantine: "0 дни",
    reg: "ИАСАС",
    badge: "За Кисело Зеле",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    desc: "Крехки, фини листа, рехава зелка и тънки жилки. Втасва перфектно в кацата и придава кристален рубинен цвят на зелевия сок.",
    rates: [
      { val: 50, label: "40-50 г семена на декар разсад" }
    ],
    packSizes: [
      { label: "3 г", price: 1.61, unit: "€ 1.70 / 3 г", default: true },
      { label: "20 г", price: 7.50, unit: "€ 7.90 / 20 г" }
    ],
    rating: 4.9,
    reviewsCount: 78,
    inStock: true
  },
  {
    id: "zucchini-izobilna-f1",
    name: "Семена Тиквички Изобилна F1",
    title: "Семена Тиквички Изобилна F1 – ранен храстовиден сорт с непрекъснато плододаване",
    category: "seeds",
    categoryName: "Семена & Картофи",
    price: 1.99,
    unit: "5 г",
    brand: "sortovi",
    brandName: "Флориан ООД",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати"],
    cropsDisplay: "Градини и полиетиленови тунели",
    active: "Чистота: 99% / Кълняемост: 95%",
    formulation: "Хибрид F1",
    quarantine: "0 дни",
    reg: "ИАСАС",
    badge: "Изобилен Добив",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    desc: "Светлозелени цилиндрични плодове с нежна месеста част. Храстовидно растение, което ражда до първите есенни слани.",
    rates: [
      { val: 350, label: "300-400 г семена за декар" }
    ],
    packSizes: [
      { label: "5 г", price: 1.99, unit: "€ 2.10 / 5 г", default: true },
      { label: "20 г", price: 6.46, unit: "€ 6.80 / 20 г" }
    ],
    rating: 4.8,
    reviewsCount: 45,
    inStock: true
  },
  {
    id: "spinach-matador",
    name: "Семена Спанак Матадор",
    title: "Семена Спанак Матадор – студоустойчив сорт с едри тъмнозелени листа (10 г)",
    category: "seeds",
    categoryName: "Семена & Картофи",
    price: 1.33,
    unit: "10 г",
    brand: "sortovi",
    brandName: "Сортови Семена БГ",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["зеленчуци"],
    cropsDisplay: "Есенна и ранна пролетна сеитба",
    active: "Чистота: 99% / Кълняемост: 88%",
    formulation: "Сортови семена",
    quarantine: "0 дни",
    reg: "ИАСАС",
    badge: "Студоустойчив",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    desc: "Зимува без проблем на открито под снега. Богати на желязо и витамини листа, които не стрелкуват преждевременно.",
    rates: [
      { val: 2000, label: "1.5 - 2.5 кг семена на декар (директна сеитба)" }
    ],
    packSizes: [
      { label: "10 г", price: 1.33, unit: "€ 1.40 / 10 г", default: true },
      { label: "50 г", price: 4.27, unit: "€ 4.50 / 50 г" },
      { label: "500 г", price: 17.10, unit: "€ 18.00 / 500 г" }
    ],
    rating: 4.9,
    reviewsCount: 38,
    inStock: true
  },
  {
    id: "carrot-nantes",
    name: "Семена Моркови Нантски 3",
    title: "Семена Моркови Нантски 3 – сочни цилиндрични моркови без твърдо сърце (5 г)",
    category: "seeds",
    categoryName: "Семена & Картофи",
    price: 1.42,
    unit: "5 г",
    brand: "sortovi",
    brandName: "Сортови Семена БГ",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["зеленчуци"],
    cropsDisplay: "Леки песъчливи почви на открито",
    active: "Чистота: 98% / Кълняемост: 87%",
    formulation: "Сортови семена",
    quarantine: "0 дни",
    reg: "ИАСАС",
    badge: "Сладък & Сочен",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    desc: "Класически ранен до средно ранен сорт с гладка оранжева повърхност, тъп връх и високо съдържание на каротин за бебешки пюрета и фрешове.",
    rates: [
      { val: 500, label: "450-600 г на декар" }
    ],
    packSizes: [
      { label: "5 г", price: 1.42, unit: "€ 1.50 / 5 г", default: true },
      { label: "20 г", price: 4.56, unit: "€ 4.80 / 20 г" }
    ],
    rating: 4.8,
    reviewsCount: 52,
    inStock: true
  }
];

window.AGRO_CATALOG_DATA.push(...SEEDS);
