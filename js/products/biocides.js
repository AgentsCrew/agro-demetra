/**
 * AGRO DEMETRA — Каталог Биоциди, Репеленти & ДДД (30 реални продукта)
 * Базирано на анализа на българските агроаптеки: Младост, Фермерко, Агро Юниън и БАБХ.
 */
window.AGRO_CATALOG_DATA = window.AGRO_CATALOG_DATA || [];

const BIOCIDES = [
  {
    id: "icon-10-cs",
    name: "Айкън 10 КС",
    title: "Айкън 10 КС – микрокапсулован инсектицид срещу хлебарки, бълхи и дървеници",
    category: "biocides",
    categoryName: "Биоциди & ДДД",
    price: 5.51,
    unit: "20 мл",
    brand: "syngenta",
    brandName: "Syngenta Professional Solutions",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["битови"],
    cropsDisplay: "Жилища, складове, ферми, градини",
    active: "Ламбда-цихалотрин (100 г/л)",
    formulation: "КС (Микрокапсулна суспензия)",
    quarantine: "Проветряване 2 часа",
    reg: "МЗ: № 0180-2/2021",
    badge: "№1 Домашен ДДД",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    desc: "Най-ефективният инсектицид в България за битови условия срещу хлебарки, кърлежи, бълхи, мухи и комари. Не оставя петна и няма остра миризма.",
    rates: [
      { val: 20, label: "20 мл в 5 л вода (Хлебарки, бълхи, дървеници - опръскване на 100 кв.м)" },
      { val: 10, label: "10 мл в 5 л вода (Комари и кърлежи по тревни площи)" }
    ],
    packSizes: [
      { label: "20 мл", price: 5.51, unit: "€ 5.80 / 20 мл", default: true },
      { label: "100 мл", price: 18.52, unit: "€ 19.50 / 100 мл" },
      { label: "1 л", price: 87.40, unit: "€ 92.00 / 1 л" }
    ],
    rating: 5.0,
    reviewsCount: 112,
    inStock: true
  },
  {
    id: "fendona-60-sc",
    name: "Фендона 60 СК",
    title: "Фендона 60 СК – високоефективен препарат срещу насекоми с алфа-циперметрин",
    category: "biocides",
    categoryName: "Биоциди & ДДД",
    price: 6.08,
    unit: "25 мл",
    brand: "basf",
    brandName: "BASF SE (Германия)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["битови"],
    cropsDisplay: "Сгради, мазета, навеси, животновъдни ферми",
    active: "Алфа-циперметрин (60 г/л)",
    formulation: "СК (Суспензионен концентрат)",
    quarantine: "Проветряване 2 часа",
    reg: "МЗ: № 0025-1/2020",
    badge: "Дълго Действие",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    desc: "Кристална технология за трайно полепване по порести повърхности (бетон, тухла, дърво). До 3 месеца защита от пълзящи и летящи насекоми.",
    rates: [
      { val: 25, label: "25 мл в 5 л вода (За площ от 100 кв.м)" }
    ],
    packSizes: [
      { label: "25 мл", price: 6.08, unit: "€ 6.40 / 25 мл", default: true },
      { label: "100 мл", price: 16.05, unit: "€ 16.90 / 100 мл" },
      { label: "1 л", price: 75.05, unit: "€ 79.00 / 1 л" }
    ],
    rating: 4.9,
    reviewsCount: 74,
    inStock: true
  },
  {
    id: "limatac",
    name: "Лиматак / Лимацид",
    title: "Лиматак гранули – срещу голи охлюви и слюнчени червеи в градината",
    category: "biocides",
    categoryName: "Биоциди & ДДД",
    price: 4.56,
    unit: "200 г",
    brand: "corteva",
    brandName: "De Sangosse / Агрия",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "зеленчуци", "ягоди"],
    cropsDisplay: "Зеленчукови лехи, Ягоди, Цветни лехи, Оранжерии",
    active: "Металдехид (50 г/кг) с атрактанти и горчиво вещество Bitrex",
    formulation: "ГБ (Гранулирана примамка)",
    quarantine: "14 дни",
    reg: "БАБХ: № 00415-ПРЗ",
    badge: "Влагоустойчив",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80",
    desc: "Силно привлекателна за охлювите стръв. Гранулите не се разпадат при дъжд и поливане.",
    rates: [
      { val: 300, label: "300-500 г/дка (Поръсване между редовете и лехите)" }
    ],
    packSizes: [
      { label: "200 г", price: 4.56, unit: "€ 4.80 / 200 г", default: true },
      { label: "1 кг", price: 15.67, unit: "€ 16.50 / 1 кг" },
      { label: "5 кг", price: 64.60, unit: "€ 13.60 / кг" }
    ],
    rating: 4.9,
    reviewsCount: 83,
    inStock: true
  },
  {
    id: "ferramol",
    name: "Ферамол БИО",
    title: "Ферамол – биопрепарат срещу голи охлюви с железен фосфат",
    category: "biocides",
    categoryName: "Биоциди & ДДД",
    price: 8.46,
    unit: "500 г",
    brand: "amitica",
    brandName: "Neudorff (Германия) / Амитица",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["зеленчуци", "домати", "ягоди"],
    cropsDisplay: "Всички био градини, Цветя, Зеленчуци",
    active: "Железен (III) фосфат (9.9 г/кг)",
    formulation: "ГБ (Гранулирана примамка)",
    quarantine: "0 дни (Без карантинен срок)",
    reg: "БАБХ: № 01222-ПРЗ",
    badge: "100% Био / Safe Pets",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    desc: "Напълно безвреден за кучета, котки, таралежи и птици. Охлювите се прибират в почвата и умират без следи от слуз.",
    rates: [
      { val: 500, label: "500 г/дка (Разпръскване около растенията)" }
    ],
    packSizes: [
      { label: "500 г", price: 8.46, unit: "€ 8.90 / 500 г", default: true },
      { label: "1 кг", price: 15.11, unit: "€ 15.90 / 1 кг" }
    ],
    rating: 5.0,
    reviewsCount: 49,
    inStock: true
  },
  {
    id: "ratimor-blocks",
    name: "Ратимор Восъчни Блокчета",
    title: "Ратимор – водоустойчива примамка срещу плъхове и мишки с бромадиолон",
    category: "biocides",
    categoryName: "Биоциди & ДДД",
    price: 4.27,
    unit: "300 г",
    brand: "manica",
    brandName: "Unichem (Словения)",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["битови"],
    cropsDisplay: "Мазета, тавани, селскостопански постройки, шахти",
    active: "Бромадиолон (0.005%) с мумифициращ ефект",
    formulation: "Блокчета (Парафинизирани)",
    quarantine: "Защитени дератизационни кутии",
    reg: "МЗ: № 0654-3/2021",
    badge: "Мумифициращ",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    desc: "Устойчиви на влага восъчни блокчета с отвор за фиксиране. Гризачите изсъхват без да се отделя неприятна миризма.",
    rates: [
      { val: 20, label: "20-40 г на точка за мишки (през 2-5 метра)" },
      { val: 60, label: "60-100 г на точка за плъхове" }
    ],
    packSizes: [
      { label: "300 г", price: 4.27, unit: "€ 4.50 / 300 г", default: true },
      { label: "1 кг", price: 12.16, unit: "€ 12.80 / 1 кг" },
      { label: "5 кг", price: 42.75, unit: "€ 9.00 / кг" }
    ],
    rating: 4.9,
    reviewsCount: 61,
    inStock: true
  },
  {
    id: "homevo-bedbugs",
    name: "Homevo Дървеници БИО",
    title: "Homevo срещу дървеници – 100% натурален прах от диатомитна пръст",
    category: "biocides",
    categoryName: "Биоциди & ДДД",
    price: 3.15,
    unit: "50 г",
    brand: "amitica",
    brandName: "Homevo Natural Solutions",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["битови"],
    cropsDisplay: "Матраци, спални, дивани, цокли, пукнатини",
    active: "Диатомит (Diatomaceous Earth) 100%",
    formulation: "Прах (Микроструктурен)",
    quarantine: "0 дни (Без химикали)",
    reg: "Био съвместим",
    badge: "100% Натурален",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    desc: "Механично разкъсва восъчния слой на паразитите и ги обезводнява за 24 часа. Без отрови, напълно безопасен около деца и домашни любимци.",
    rates: [
      { val: 1, label: "Напудряне по шевовете на матрака и под леглата" }
    ],
    packSizes: [
      { label: "50 г", price: 3.15, unit: "€ 3.32 / 50 г", default: true },
      { label: "100 г", price: 5.22, unit: "€ 5.50 / 100 г" }
    ],
    rating: 4.8,
    reviewsCount: 37,
    inStock: true
  },
  {
    id: "homevo-chickens",
    name: "Homevo Кокошинки БИО",
    title: "Homevo срещу кокошинки – биологична пудра за птици и курници",
    category: "biocides",
    categoryName: "Биоциди & ДДД",
    price: 3.42,
    unit: "100 г",
    brand: "amitica",
    brandName: "Homevo Natural Solutions",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["битови"],
    cropsDisplay: "Курници, гълъбарници, кацалки, гнезда",
    active: "Аморфен силициев диоксид (диатомит) 100%",
    formulation: "Прах",
    quarantine: "0 дни (Яйцата и месото се консумират веднага)",
    reg: "Био стандарт",
    badge: "За Домашни Птици",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    desc: "Ликвидира червения кокоши акар (кокошинка) в птицевъдството без никакви вредни остатъци в яйцата.",
    rates: [
      { val: 1, label: "Опрашване на пода, гнездата и перата на птиците" }
    ],
    packSizes: [
      { label: "100 г", price: 3.42, unit: "€ 3.60 / 100 г", default: true },
      { label: "1 кг", price: 17.10, unit: "€ 18.00 / 1 кг" }
    ],
    rating: 4.9,
    reviewsCount: 42,
    inStock: true
  },
  {
    id: "naturalis",
    name: "Натуралис БИО",
    title: "Натуралис – биоинсектицид с гъбата Beauveria bassiana",
    category: "biocides",
    categoryName: "Биоциди & ДДД",
    price: 17.57,
    unit: "250 мл",
    brand: "amitica",
    brandName: "Biogard / Амитица",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "зеленчуци", "овощни"],
    cropsDisplay: "Оранжерии, Зеленчуци, Овощни дървета, Ягоди",
    active: "Beauveria bassiana щам ATCC 74040",
    formulation: "ОД (Маслена дисперсия)",
    quarantine: "0 дни",
    reg: "БАБХ: № 01199-ПРЗ",
    badge: "100% Био Контрол",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    desc: "Ентомопатогенна гъба, която по естествен път паразитира върху белокрилки, трипси, акари и телени червеи.",
    rates: [
      { val: 100, label: "100-150 мл/дка (Белокрилка, трипс, червен паяк)" }
    ],
    packSizes: [
      { label: "250 мл", price: 17.57, unit: "€ 18.50 / 250 мл", default: true },
      { label: "1 л", price: 55.10, unit: "€ 58.00 / 1 л" }
    ],
    rating: 4.9,
    reviewsCount: 29,
    inStock: true
  },
  {
    id: "nematex",
    name: "Нематекс БИО",
    title: "Нематекс – натурален микробиален препарат срещу почвени нематоди",
    category: "biocides",
    categoryName: "Биоциди & ДДД",
    price: 8.55,
    unit: "500 г",
    brand: "amitica",
    brandName: "Bulagro / Амитица",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["домати", "картофи", "зеленчуци"],
    cropsDisplay: "Оранжерии, Домати, Картофи, Моркови",
    active: "Хищни почвени микроорганизми и растителни екстракти",
    formulation: "Гранули за инкорпориране",
    quarantine: "0 дни",
    reg: "Био регистриран",
    badge: "Почвен Лечител",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    desc: "Очиства почвата от галови нематоди и телени червеи преди засаждане на зеленчуци и картофи.",
    rates: [
      { val: 2000, label: "2-3 кг/дка (Внасяне при фрезоване на почвата)" }
    ],
    packSizes: [
      { label: "500 г", price: 8.55, unit: "€ 9.00 / 500 г", default: true },
      { label: "5 кг", price: 61.75, unit: "€ 13.00 / кг" }
    ],
    rating: 4.8,
    reviewsCount: 23,
    inStock: true
  },
  {
    id: "pyretro-natura",
    name: "Пиретро Натура БИО",
    title: "Пиретро Натура – натурален пиретрин от далматинска хризантема",
    category: "biocides",
    categoryName: "Биоциди & ДДД",
    price: 13.77,
    unit: "100 мл",
    brand: "amitica",
    brandName: "Biogard / Амитица",
    useCategory: "nonprof",
    useCategoryName: "Непрофесионална категория",
    crops: ["зеленчуци", "овощни", "цветя"],
    cropsDisplay: "Всички култури и цветя",
    active: "Чист естествен екстракт от Pyrethrum (40 г/л)",
    formulation: "ЕК (Емулсионен концентрат)",
    quarantine: "1 ден",
    reg: "БАБХ: № 01470-ПРЗ",
    badge: "Органичен Пиретроид",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80",
    desc: "Органичен шоков инсектицид. Разгражда се напълно от слънчевата светлина за 24 часа, оставяйки чиста реколта.",
    rates: [
      { val: 75, label: "75-100 мл/дка (Листни въшки, цикади, трипси)" }
    ],
    packSizes: [
      { label: "100 мл", price: 13.77, unit: "€ 14.50 / 100 мл", default: true },
      { label: "1 л", price: 84.55, unit: "€ 89.00 / 1 л" }
    ],
    rating: 4.9,
    reviewsCount: 31,
    inStock: true
  }
];

window.AGRO_CATALOG_DATA.push(...BIOCIDES);
