/**
 * Alle zichtbare gegevens van de Bource-demo.
 * Slug blijft "bource-demo" (data-demo van de analytics-tracker).
 * Niets verzinnen: teksten zijn licht geredigeerd van de live site.
 */

export const content = {
  slug: "bource-demo",

  company: {
    name: "Hoveniersbedrijf Bource",
    legal: "Tuiniersbedrijf A.J.B. Bource",
    tagline: "De specialist voor al uw tuinvragen",
  },

  phone: {
    primary: "06 - 13 81 29 47",
    primaryTel: "tel:+31613812947",
    fallback: "06 - 15 50 76 80",
    fallbackTel: "tel:+31615507680",
    fallbackLabel: "bij geen gehoor",
  },

  email: "tuiniersbedrijfbource@gmail.com",

  seo: {
    lang: "nl",
    title: "Tuiniersbedrijf A.J.B. Bource – de specialist voor al uw tuinvragen",
    description:
      "Hoveniersbedrijf Bource is al meer dan 35 jaar specialist en heeft een trouwe klantenkring opgebouwd. Ook u kunt terecht voor al uw tuinvragen en meer.",
  },

  colors: {
    inkt: "#1A1C14",
    papier: "#FBF3E3",
    vlak: "#F7E9CC",
    wit: "#FFFFFF",
    olijf: "#5C6B2E",
    blad: "#3A7A2A",
    neon: "#10F064",
  },

  nav: [
    { href: "/tuinontwerp", label: "Tuinontwerp en -aanleg", short: "Ontwerp" },
    { href: "/tuinonderhoud", label: "Tuinonderhoud", short: "Onderhoud" },
    { href: "/tuinadvies", label: "Tuinadvies", short: "Advies" },
    { href: "/onderhoudsvrije-gazons", label: "Onderhoudsvrije gazons", short: "Gazons" },
    { href: "/grafbeplanting", label: "Grafbeplanting", short: "Graven" },
    { href: "/groeigarantie", label: "Groeigarantie", short: "Garantie" },
    { href: "/vakantie", label: "Uw tuin tijdens uw vakantie", short: "Vakantie" },
    { href: "/planten", label: "Onze planten", short: "Planten" },
    { href: "/producten", label: "Onze producten", short: "Producten" },
    { href: "/onkruidbestrijding", label: "Onkruidbestrijding", short: "Onkruid" },
    { href: "/bodembedekking", label: "Bodembedekking", short: "Bodem" },
    { href: "/contact", label: "Contact", short: "Contact" },
  ],

  home: {
    h1: "De specialist voor al uw tuinvragen",
    lead: "Hoveniersbedrijf Bource is al meer dan 35 jaar specialist en heeft inmiddels een trouwe klantenkring opgebouwd. Ook u kunt terecht voor al uw tuinvragen en meer.",
    fields: [
      {
        label: "01 TUINONTWERP",
        title: "Tuinontwerp",
        text: "In nauw overleg met de klant wordt gezocht naar een passend ontwerp, waarbij rekening gehouden wordt met de wensen en de mogelijkheden van de klant, alsmede de milieuaspecten die een rol spelen bij de aanleg en het onderhoud.",
        href: "/tuinontwerp",
        link: "Tuinontwerp en -aanleg",
      },
      {
        label: "02 AANLEG",
        title: "Aanleg",
        text: "De door ons ontworpen tuinen kunnen vanzelfsprekend ook door ons worden aangelegd. U kunt rekenen op een perfecte afhandeling en snelle realisering van het project.",
        href: "/tuinontwerp#aanleg",
        link: "Naar aanleg",
      },
      {
        label: "03 ONDERHOUD",
        title: "Tuinonderhoud",
        text: "Voor- en najaarsbeurt, onderhoud het gehele jaar, maaien, snoei van hoge bomen met een hoogwerker, snoeihout versnipperen, uitdunnen van windsingels, graven, en tuin- en plantenadvies.",
        href: "/tuinonderhoud",
        link: "Tuinonderhoud",
      },
      {
        label: "04 ADVIES",
        title: "Tuinadvies",
        text: "Het plaatsen van leibomen en -struiken is een goede oplossing tegen ongewenste inkijk in uw tuin. Hoveniersbedrijf Bource kan u hierbij van advies dienen en de gewenste prijsvriendelijke materialen en producten plaatsen en onderhouden.",
        href: "/tuinadvies",
        link: "Tuinadvies",
      },
    ],
    more: [
      {
        title: "Onderhoudsvrije gazons en borders",
        text: "Wel de lusten, maar niet de lasten. Bijna onderhoudsvrije gazons en borders, en een genietpakket.",
        href: "/onderhoudsvrije-gazons",
        link: "Gazons en borders",
      },
      {
        title: "Grafbeplanting",
        text: "Advies, aanleg en onderhoud. In overleg, zo vaak als u nodig acht.",
        href: "/grafbeplanting",
        link: "Grafbeplanting",
      },
      {
        title: "Groeigarantie",
        text: "Bomen, heesters en vaste planten die binnen één jaar doodgaan, worden herplant. Plant, tijd en mest worden niet berekend.",
        href: "/groeigarantie",
        link: "Groeigarantie",
      },
      {
        title: "Uw tuin tijdens uw vakantie",
        text: "Maaien en perken onkruidvrij houden terwijl u weg bent. Ongewenste indringers merken niet dat u op vakantie bent.",
        href: "/vakantie",
        link: "Vakantie",
      },
      {
        title: "Onze planten",
        text: "Bomen, heesters, rhododendrons, buxus, rozen, vaste planten en meststoffen.",
        href: "/planten",
        link: "Planten",
      },
      {
        title: "Onze producten",
        text: "Gazons en borders, bestrating, vlonders, schuttingen, tuinhuizen, pergola’s, vijvers en waterornamenten.",
        href: "/producten",
        link: "Producten",
      },
      {
        title: "Onkruidbestrijding",
        text: "Onkruid, insectenplagen, schimmelziekten en groene aanslag op tegels en muren.",
        href: "/onkruidbestrijding",
        link: "Onkruidbestrijding",
      },
      {
        title: "Bodembedekking",
        text: "Elke gewenste hoeveelheid, zoals grind, zand of split. Maatwerk: niet te weinig en niet te veel.",
        href: "/bodembedekking",
        link: "Bodembedekking",
      },
    ],
  },

  pages: {
    tuinontwerp: {
      title: "Tuinontwerp en -aanleg",
      description:
        "Tuinontwerp in nauw overleg, met aandacht voor wensen, mogelijkheden en milieuaspecten. De ontworpen tuinen kunnen ook door Bource worden aangelegd.",
      paragraphs: [
        "Het behoeft geen betoog dat Hoveniersbedrijf Bource gespecialiseerd is in tuinontwerp. In nauw overleg met de klant wordt gezocht naar een passend ontwerp, waarbij rekening gehouden wordt met de wensen en de mogelijkheden van de klant, alsmede de milieuaspecten die een rol spelen bij de aanleg en het onderhoud.",
      ],
      aanleg:
        "De door ons ontworpen tuinen kunnen vanzelfsprekend ook door ons worden aangelegd. U kunt rekenen op een perfecte afhandeling en snelle realisering van het project.",
      beats: [
        {
          title: "Gespecialiseerd in tuinontwerp",
          text: "Het behoeft geen betoog dat Hoveniersbedrijf Bource gespecialiseerd is in tuinontwerp.",
        },
        {
          title: "In nauw overleg",
          text: "In nauw overleg met de klant wordt gezocht naar een passend ontwerp.",
        },
        {
          title: "Wensen en mogelijkheden",
          text: "Er wordt rekening gehouden met de wensen en de mogelijkheden van de klant.",
        },
        {
          title: "Milieuaspecten",
          text: "Alsmede de milieuaspecten die een rol spelen bij de aanleg en het onderhoud.",
        },
      ],
      also: [
        { href: "/planten", label: "Onze planten" },
        { href: "/producten", label: "Onze producten" },
        { href: "/onderhoudsvrije-gazons", label: "Onderhoudsvrije gazons en borders" },
      ],
    },
    tuinonderhoud: {
      title: "Tuinonderhoud",
      description:
        "Voor- en najaarsbeurt, onderhoud het gehele jaar, maaien, snoei met hoogwerker, versnipperen, windsingels, graven en tuinadvies.",
      intro: "Op het gebied van tuinonderhoud hebben we onder andere het volgende te bieden:",
      tasks: [
        { title: "De voor- en najaarsbeurt" },
        { title: "Onderhoud van uw tuin gedurende het gehele jaar" },
        {
          title: "Maaien van het gazon, eventueel onderhoud van de tuin gedurende de vakantie",
          href: "/vakantie",
          link: "Uw tuin tijdens uw vakantie",
        },
        { title: "Snoeien van hoge bomen met een hoogwerker" },
        { title: "Snoeihout versnipperen" },
        { title: "Uitdunnen van windsingels" },
        {
          title: "Beplanten en onderhoud van graven",
          href: "/grafbeplanting",
          link: "Grafbeplanting",
        },
        {
          title: "Tuin- en plantenadvies",
          href: "/tuinadvies",
          link: "Tuinadvies",
        },
      ],
      hedge: "Haag voor het snoeien, en haag na het snoeien.",
      also: [
        { href: "/vakantie", label: "Uw tuin tijdens uw vakantie" },
        { href: "/grafbeplanting", label: "Grafbeplanting" },
        { href: "/tuinadvies", label: "Tuinadvies" },
        { href: "/planten", label: "Onze planten" },
      ],
    },
    tuinadvies: {
      title: "Tuinadvies",
      description:
        "Advies over leibomen en -struiken tegen ongewenste inkijk, en een kritische blik op de tuin als het huis te koop staat.",
      paragraphs: [
        "U heeft een prachtige tuin en u wilt daar optimaal van genieten. Maar u stelt ook veel prijs op privacy. Het plaatsen van leibomen en -struiken is een goede oplossing tegen ongewenste inkijk in uw tuin.",
        "Hoveniersbedrijf Bource kan u hierbij van advies dienen en uiteraard ook de gewenste prijsvriendelijke materialen en producten plaatsen en onderhouden.",
        "Misschien heeft u uw huis te koop staan en doet u regelmatig mee aan de halfjaarlijkse open dagen. Dan zou het de moeite kunnen lonen om uw tuin nog eens aan een kritisch onderzoek te onderwerpen. Ook hierin kan Hoveniersbedrijf Bource u bijstaan. En mocht het toch nog niet lukken uw huis te verkopen, dan kunt u er in ieder geval zelf nog veel plezier aan beleven.",
      ],
      also: [
        { href: "/planten", label: "Onze planten" },
        { href: "/producten", label: "Onze producten" },
        { href: "/tuinontwerp", label: "Tuinontwerp en -aanleg" },
      ],
    },
    gazons: {
      title: "Onderhoudsvrije gazons en borders",
      description:
        "Wel de lusten, maar niet de lasten. Bijna onderhoudsvrije gazons en borders, en een genietpakket.",
      statement: "Wel de lusten, maar niet de lasten.",
      paragraphs: [
        "De ideale oplossing voor mensen die wel van hun tuin houden, maar zelf geen groene vingers hebben. Hoveniersbedrijf Bource kan u helpen door het aanleggen van (bijna) onderhoudsvrije gazons en borders.",
        "Laat u verrassen en laat Bource een zogenaamd genietpakket uitzetten. U heeft er geen omkijken naar en binnen no time heeft u een prachtige border.",
      ],
      also: [
        { href: "/producten", label: "Onze producten" },
        { href: "/tuinontwerp", label: "Tuinontwerp en -aanleg" },
        { href: "/bodembedekking", label: "Bodembedekking" },
      ],
    },
    graf: {
      title: "Grafbeplanting",
      description:
        "Persoonlijke grafbeplanting: advies, aanleg en onderhoud in overleg, zo vaak als u nodig acht.",
      questions: [
        "Wat waren de favoriete bloemen en planten?",
        "Welke kleuren spraken de overledene aan?",
      ],
      paragraphs: [
        "Bij de beplanting van een graf spelen veel persoonlijke zaken een rol.",
        "Het afstemmen van de beplanting maakt van elk graf een persoonlijk monument.",
      ],
      offer: [
        "Wij kunnen u adviseren, een beplantingsadvies geven of de grafbeplanting aanleggen.",
        "Ook kunnen wij het onderhoud van een graf voor u verzorgen. In overleg, zo vaak als u nodig acht.",
      ],
      steps: [
        "Adviseren",
        "Een beplantingsadvies geven",
        "De grafbeplanting aanleggen",
        "Het onderhoud verzorgen, in overleg, zo vaak als u nodig acht",
      ],
      also: [{ href: "/tuinonderhoud", label: "Tuinonderhoud" }],
    },
    groeigarantie: {
      title: "Groeigarantie",
      description:
        "Bomen, heesters en vaste planten die Bource levert en plant en die binnen één jaar doodgaan, worden herplant. Plant, tijd en mest worden niet berekend.",
      question: "Wat is groeigarantie?",
      paragraphs: [
        "Alle door ons geleverde en geplante bomen, heesters en vaste planten die binnen één jaar na het planten doodgaan, worden herplant.",
        "Beplanting, tijd en eventuele meststoffen worden niet berekend.",
      ],
      covered: ["bomen", "heesters", "vaste planten"],
      terms: [
        "Geleverd én geplant door Hoveniersbedrijf Bource.",
        "Doodgegaan binnen één jaar na het planten.",
        "Worden herplant.",
        "Beplanting, tijd en eventuele meststoffen worden niet berekend.",
      ],
      also: [{ href: "/planten", label: "Onze planten" }],
    },
    vakantie: {
      title: "Uw tuin tijdens uw vakantie",
      description:
        "Tuinonderhoud tijdens uw vakantie: maaien en perken onkruidvrij. Ongewenste indringers merken niet dat u weg bent.",
      paragraphs: [
        "Wellicht vindt u uw vakantie de periode bij uitstek om uw tuin eens goed onder handen te laten nemen. Ook voor tuinonderhoud zoals het maaien van het gazon of het onkruidvrij maken van perken en dergelijke kunt u Hoveniersbedrijf Bource inschakelen.",
        "Een belangrijk bijkomend voordeel is dat het ongewenste indringers niet opvalt dat u op vakantie bent.",
      ],
      cta: "Bel voor een offerte of een afspraak.",
      also: [{ href: "/tuinonderhoud", label: "Tuinonderhoud" }],
    },
    planten: {
      title: "Onze planten",
      description:
        "Bomen van Acacia dealbata tot en met Tilia europaea 'Pallida', heesters, rhododendrons, buxus, rozen, vaste planten en meststoffen.",
      intro: "Wij kunnen tal van planten leveren. Bomen, heesters, rhododendrons, buxussen, rozen, vaste planten.",
      groups: [
        { name: "Bomen", range: "Acacia dealbata tot en met Tilia europaea 'Pallida'" },
        { name: "Heesters", range: "Abelia 'Edward Goucher' tot en met Weigela 'Rosea'" },
        { name: "Rhododendrons", range: "in verschillende soorten en maten" },
        { name: "Buxus", range: "in allerlei vormen, zoals bol, piramide en kubus" },
        { name: "Rozen", range: "in allerlei soorten" },
        { name: "Vaste planten", range: "Acaena buchananii tot en met Yucca filamentosa" },
        { name: "Meststoffen", range: "" },
      ],
      forms: ["bol", "piramide", "kubus"],
      also: [
        { href: "/groeigarantie", label: "Groeigarantie" },
        { href: "/tuinadvies", label: "Tuinadvies" },
        { href: "/tuinontwerp", label: "Tuinontwerp en -aanleg" },
      ],
    },
    producten: {
      title: "Onze producten",
      description:
        "Leveren en aanleggen van onderhoudsvrije gazons en borders, bestrating, terrassen en vlonders, schuttingen, tuinhuizen, pergola’s, vijvers en waterornamenten.",
      intro: "Hoveniersbedrijf Bource is gespecialiseerd in het leveren, plaatsen en aanleggen van:",
      items: [
        "onderhoudsvrije gazons en borders",
        "betegeling",
        "terrassen en houten vlonders",
        "schuttingen en hekwerk",
        "tuinhuisjes en pergola’s",
        "vijvers en waterornamenten",
      ],
      also: [
        { href: "/onderhoudsvrije-gazons", label: "Onderhoudsvrije gazons en borders" },
        { href: "/tuinontwerp", label: "Tuinontwerp en -aanleg" },
        { href: "/bodembedekking", label: "Bodembedekking" },
      ],
    },
    onkruid: {
      title: "Onkruidbestrijding",
      description:
        "Bestrijding van onkruid, insectenplagen, schimmelziekten en groene aanslag, met een tweecomponentenproduct uit de professionele reiniging.",
      intro: "U kunt bij ons terecht voor het bestrijden van:",
      targets: ["onkruid", "insectenplagen", "schimmelziekten", "groene aanslag op tegels en muren"],
      body: "Wij gebruiken een uiterst doeltreffend middel om op een vriendelijke manier algen en mossen van iedere ondergrond aan te pakken. Dit tweecomponentenproduct wordt in de professionele reiniging toegepast op allerlei soorten daken, muren en bestratingen.",
      advantagesTitle: "Voordelen van dat product",
      advantages: [
        "Het is in verdunde vorm niet agressief voor de ondergrond.",
        "Het impregneert en laat een onzichtbare beschermlaag achter.",
        "Het werkt tot een jaar lang.",
        "Door de gemakkelijke toepassing en de preventieve werking werkt het zeer arbeidsbesparend.",
      ],
      also: [
        { href: "/tuinonderhoud", label: "Tuinonderhoud" },
        { href: "/bodembedekking", label: "Bodembedekking" },
      ],
    },
    bodem: {
      title: "Bodembedekking",
      description:
        "Elke gewenste hoeveelheid bodembedekking, zoals grind, zand of split. Maatwerk: niet te weinig en niet te veel.",
      paragraphs: [
        "Hoveniersbedrijf Bource kan u elke gewenste hoeveelheid bodembedekking leveren, zoals bijvoorbeeld grind, zand of split. U zit niet vast aan grote partijen die u in hun geheel moet betalen.",
        "Wij leveren maatwerk: niet te weinig, maar ook niet te veel.",
      ],
      materials: ["grind", "zand", "split"],
      also: [
        { href: "/producten", label: "Onze producten" },
        { href: "/onderhoudsvrije-gazons", label: "Onderhoudsvrije gazons en borders" },
      ],
    },
    contact: {
      title: "Contact",
      description:
        "Hoveniersbedrijf Bource, telefoon 06 - 13 81 29 47 (bij geen gehoor 06 - 15 50 76 80) en tuiniersbedrijfbource@gmail.com.",
      intro: "Op deze site staat geen bezoekadres. Bel, of stuur een e-mail.",
    },
    offerte: {
      title: "Offerte aanvragen",
      description: "Vraag een offerte aan bij Hoveniersbedrijf Bource. Het formulier opent uw e-mailprogramma.",
      intro:
        "Beschrijf kort wat u wilt laten doen. Het formulier opent uw e-mailprogramma en verstuurt niets naar een server. Onderwerp en bericht beginnen met «Goedendag,».",
    },
    privacy: {
      title: "Privacy",
      description: "Korte privacytoelichting bij deze conceptsite van Sleads voor Hoveniersbedrijf Bource.",
      paragraphs: [
        "Deze website is een concept van Sleads voor Hoveniersbedrijf Bource. Het is geen officiële pagina van het hoveniersbedrijf.",
        "De site plaatst geen cookies. Er wordt wel een cookieloos script van Sleads geladen (demo-analytics). Dat script houdt bij welke pagina’s van deze demo worden bekeken, zonder account en zonder dat u iets hoeft goed te keuren.",
        "Formulieren op deze site versturen niets naar een server. Kiest u voor verzenden, dan opent uw eigen e-mailprogramma een bericht aan tuiniersbedrijfbource@gmail.com. Onderwerp en bericht beginnen met «Goedendag,». Wat u daarna verzendt, gaat via uw e-mail.",
        "Vragen over deze conceptsite kunt u stellen via sleads.nl. Voor tuinvragen belt of mailt u Hoveniersbedrijf Bource.",
      ],
    },
    notFound: {
      title: "Deze pagina bestaat niet",
      text: "Het adres klopt niet, of de pagina hoort niet bij deze conceptsite. Deze tak loopt hier niet verder.",
      link: "Terug naar welkom",
    },
  },

  form: {
    note: "Dit formulier opent uw e-mailprogramma. Er wordt niets naar een server verstuurd. Onderwerp en bericht beginnen met «Goedendag,».",
    naam: "Naam",
    telefoon: "Telefoon",
    email: "E-mail",
    bericht: "Bericht",
    dienst: "Onderwerp",
    dienstEmpty: "Maak een keuze",
    submitContact: "Verstuur via e-mail",
    submitOfferte: "Offerte aanvragen via e-mail",
    subjectContact: "Goedendag, bericht",
    subjectOfferte: "Goedendag, offerteaanvraag",
    errors: {
      naam: "Vul uw naam in.",
      bericht: "Schrijf een kort bericht.",
      email: "Het e-mailadres lijkt niet te kloppen.",
    },
    diensten: [
      "Tuinontwerp en -aanleg",
      "Tuinonderhoud",
      "Tuinadvies",
      "Onderhoudsvrije gazons en borders",
      "Grafbeplanting",
      "Groeigarantie",
      "Uw tuin tijdens uw vakantie",
      "Planten",
      "Producten",
      "Onkruidbestrijding",
      "Bodembedekking",
    ],
  },
} as const;

export type Plate = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export const photos = {
  leibomen: {
    src: "/img/leibomen.png",
    alt: "Leibomen als groen scherm: verticale stammen met horizontale takken.",
    width: 180,
    height: 133,
    caption: "Leibomen",
  },
  ervoor: {
    src: "/img/ervoor.jpg",
    alt: "Haag voor het snoeien, langs een pad.",
    width: 160,
    height: 160,
    caption: "Voor",
  },
  erna: {
    src: "/img/erna.jpg",
    alt: "Haag na het snoeien, strak geknipt langs het pad.",
    width: 160,
    height: 160,
    caption: "Na",
  },
  hoogwerker: {
    src: "/img/hoogwerker.jpg",
    alt: "Snoeien van een hoge boom vanuit een hoogwerker.",
    width: 140,
    height: 140,
    caption: "Hoogwerker",
  },
  berthien: {
    src: "/img/berthien.jpg",
    alt: "Persoon in een gele jas snoeit een haag met een heggenschaar.",
    width: 160,
    height: 160,
    caption: "Haag snoeien",
  },
  ontwerpSchets: {
    src: "/img/tuinontwerp_01.jpg",
    alt: "Getekend tuinontwerp, bovenaanzicht.",
    width: 140,
    height: 140,
    caption: "Schets",
  },
  ontwerpBorder: {
    src: "/img/tuinontwerp_02.jpg",
    alt: "Border met rotsen, siergrassen en een schaal.",
    width: 140,
    height: 140,
    caption: "Border",
  },
  indexTuin: {
    src: "/img/index_01.jpg",
    alt: "Gazon met stapstenen, borders en een bank.",
    width: 140,
    height: 140,
    caption: "Tuin",
  },
  indexVijver: {
    src: "/img/index_02.jpg",
    alt: "Vijver met keien, vlonder en beplanting.",
    width: 140,
    height: 140,
    caption: "Vijver en vlonder",
  },
  tuinhuis: {
    src: "/img/tuinhuisje-01.jpg",
    alt: "Houten tuinhuis met een rieten dak.",
    width: 140,
    height: 140,
    caption: "Tuinhuis",
  },
  vlonder: {
    src: "/img/hout-01.jpg",
    alt: "Houten vlonder.",
    width: 140,
    height: 140,
    caption: "Vlonder",
  },
  onkruidVoegen: {
    src: "/img/tuinonderhoud_02.jpg",
    alt: "Onkruid tussen bestrating.",
    width: 150,
    height: 113,
    caption: "Onkruid in de voegen",
  },
  snoei: {
    src: "/img/tuinonderhoud_03.jpg",
    alt: "Snoeischaar aan een tak.",
    width: 140,
    height: 140,
    caption: "Snoei",
  },
  grind: {
    src: "/img/grind.png",
    alt: "Grind als bodembedekking.",
    width: 140,
    height: 140,
    caption: "Grind",
  },
  schors: {
    src: "/img/schors.png",
    alt: "Houtschors als bodembedekking.",
    width: 140,
    height: 140,
    caption: "Schors",
  },
  vijverrand: {
    src: "/img/foto-voor-website-1.jpg",
    alt: "Vijverrand met stenen en beplanting.",
    width: 160,
    height: 160,
    caption: "Vijverrand",
  },
  grindbed: {
    src: "/img/foto-voor-website-2.jpg",
    alt: "Grindvlak met bloemen en een donkere zuil.",
    width: 160,
    height: 160,
    caption: "Grind en bloemen",
  },
  terras: {
    src: "/img/foto-voor-website-3.jpg",
    alt: "Terras, haag en border langs het water.",
    width: 160,
    height: 160,
    caption: "Terras",
  },
  klaprozen: {
    src: "/img/foto-voor-website-4.jpg",
    alt: "Rode klaprozen in een border.",
    width: 160,
    height: 160,
    caption: "Border",
  },
  rhododendron: {
    src: "/img/foto-voor-website-5.jpg",
    alt: "Bloeiende rhododendron.",
    width: 160,
    height: 160,
    caption: "Rhododendron",
  },
  gazon: {
    src: "/img/gazon_263x263.png",
    alt: "Gazon met geschoren hagen.",
    width: 263,
    height: 263,
    caption: "Gazon",
  },
  mosTegels: {
    src: "/img/Mos-op-tegels-01.jpg",
    alt: "Mos tussen terrastegels.",
    width: 150,
    height: 113,
    caption: "Mos op tegels",
  },
  mosVoegen: {
    src: "/img/Mos-op-tegels-02.jpg",
    alt: "Mos en klein onkruid in de voegen van bestrating.",
    width: 150,
    height: 113,
    caption: "Voegen",
  },
  banner: {
    src: "/img/banner-tuiniersbedrijf_2018.jpg",
    alt: "Banner van Hoveniersbedrijf Bource, met drie tuinfoto’s en de bedrijfsnaam.",
    width: 960,
    height: 180,
    caption: "Banner",
  },
} as const satisfies Record<string, Plate>;

export function mailHref(subject: string, body: string) {
  return `mailto:${content.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const directMail = mailHref("Goedendag,", "Goedendag,\n\n");
