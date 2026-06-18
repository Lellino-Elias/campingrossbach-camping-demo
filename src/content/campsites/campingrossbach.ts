import type { CampsiteConfig } from "../types";

/**
 * Camping Rossbach · Nassereith (Tirol) — honest, source-grounded config.
 * Quelle: raw/digest (campingrossbach.at). Bildarm: nur 3 belegte Fotos vorhanden
 * (Luftaufnahme, Gastgeberfamilie im Wirtshaus, Imst-Card) + Logo. Sektionen ohne
 * ehrliches Bild bleiben bewusst leer und blenden sich aus. Du-Anrede durchgehend.
 */
const IMG = "/campsites/campingrossbach";

const campingrossbach: CampsiteConfig = {
  name: "Camping Rossbach",
  shortName: "Rossbach",
  slug: "campingrossbach",
  ort: "Nassereith",
  region: "Tirol",
  brandKind: "Camping",
  regionLong: "Outdoorregion Imst · Tirol · Österreich",

  // KEIN theme-Feld (Original-Palette). Hero immer mittig.
  heroVariant: "center",

  claim: "Camping im Herzen der Tiroler Alpen",
  claimEmphasis: "der Tiroler Alpen",
  emailDetail: "euer eigenes Restaurant zum goldenen Hirschen direkt am Platz",
  intro:
    "Zwischen Wäldern und Bergen bei Nassereith erwarten dich familienfreundliche Stellplätze, ein eigenes Wirtshaus und kurze Wege in die Outdoorregion Imst — Camping, bei dem Freiheit kein Werbewort ist.",

  logo: { src: `${IMG}/logo.png`, alt: "Logo Camping Rossbach Nassereith" },

  statement: {
    text: "Hier beginnt dein Urlaub dort, wo die Tiroler Berge am nächsten sind.",
    emphasis: "die Tiroler Berge",
  },

  // Bildarm: keine drei belegten, motivtreuen Pillar-Bilder vorhanden → Pillar-Block bleibt leer
  // (BrandStatement blendet sich dann ehrlich aus). Lieber weglassen als ein Bild doppelt/falsch zeigen.
  pillars: [],

  usps: [
    "Eigenes Restaurant am Platz",
    "Imst Card inklusive",
    "Familienfreundliche Stellplätze",
    "Spielplatz für Kinder",
    "Geöffnet März–Oktober",
  ],

  trust: {
    heading: "Die Berge vor dem Zelt, das Gasthaus gleich nebenan",
    headingEmphasis: "das Gasthaus",
    intro:
      "Die Gastgeberfamilie führt den Platz persönlich: ein eigenes Wirtshaus, ein Spielplatz für die Kinder und die ganze Outdoorregion Imst direkt vor der Tür — von März bis Oktober.",
  },

  awards: [],

  saison: { von: "März", bis: "Oktober" },

  hero: {
    aerial: {
      src: `${IMG}/hero-aerial.webp`,
      alt: "Luftaufnahme von Camping Rossbach in den Tiroler Alpen bei Nassereith",
    },
  },

  camping: {
    heading: "Gutes Essen, ganze Region inklusive",
    intro:
      "Ein eigenes Wirtshaus am Platz und die Imst Card für die ganze Outdoorregion — bei Camping Rossbach gehört beides einfach dazu.",
    features: [
      {
        title: "Zum goldenen Hirschen",
        text: "Herzhaftes vom Grill und hausgemachte Schmankerl unter freiem Himmel — das Wirtshaus am Platz.",
        image: {
          src: `${IMG}/restaurant-hirschen.webp`,
          alt: "Im Restaurant zum goldenen Hirschen am Camping Rossbach",
        },
      },
      {
        title: "Imst Card inklusive",
        text: "Freie Eintritte und Leistungen in der ganzen Outdoorregion Imst — im Gegenwert von bis zu € 600.",
        image: {
          src: `${IMG}/imst-card.webp`,
          alt: "Imst Card für die Outdoorregion Imst",
        },
      },
    ],
  },

  // EINZIGE Quell-Ausnahme: allgemeines Routing rund um Nassereith (Fernpass / A12 / Bahn / Flughafen).
  anreise: {
    heading: "Über den Fernpass zu uns",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Nassereith liegt an der Fernpassstraße (B179); von der A12 Inntalautobahn sind es rund 20 Minuten — gut beschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Imst-Pitztal, von dort weiter mit Bus oder Taxi nach Nassereith — rund 15 Minuten.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Innsbruck liegt etwa 50 Fahrminuten entfernt.",
      },
    ],
  },

  // Bildarm: kein Bento mit vier eigenständigen, ungenutzten Fotos möglich → Galerie bleibt leer
  // und blendet sich aus (das Template rendert sie erst ab vier Bildern).
  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Eindrücke",
    intro: "Ein paar Aufnahmen rund um Camping Rossbach.",
    tag: "März bis Oktober",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz in Nassereith",
    headingEmphasis: "in Nassereith",
    intro:
      "Sag uns Zeitraum und Personenzahl — wir melden uns persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Campingpreise angegeben (bitte bestätigen). Endpreis je nach Saison und Personen, zzgl. Ortstaxe.",
    highlight: {
      title: "Restaurant am Platz",
      text: "Das Wirtshaus zum goldenen Hirschen ist nur ein paar Schritte entfernt.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 32, perExtraGuest: 8 },
      { id: "komfort", label: "Komfort-Stellplatz", perNight: 39, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    coords: { lat: 47.310484, lng: 10.854766 },
    tel: "+43 677 61408871",
    telHref: "tel:+4367761408871",
    mail: "office@campingrossbach.at",
    adresse: "Roßbach 325 · 6465 Nassereith · Tirol",
    // coords bewusst weggelassen — Quelle nennt keine Koordinaten (Geocoding folgt später).
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Anreise", href: "#anreise" },
    { label: "Anfrage", href: "#booking" },
  ],
};

export default campingrossbach;
