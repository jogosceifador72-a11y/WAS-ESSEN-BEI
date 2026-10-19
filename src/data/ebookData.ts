export const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/W108024157S";
export const EBOOK_PRICE = "27,96 €";

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  iconName: 'instagram' | 'facebook' | 'kwai' | 'tiktok' | 'youtube' | 'threads';
  color: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    handle: "@karinzeit",
    url: "https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo",
    iconName: "instagram",
    color: "from-amber-500 via-rose-500 to-purple-600",
  },
  {
    name: "Facebook",
    handle: "Karin Zeit Profil",
    url: "https://www.facebook.com/share/1c8J76URqe/",
    iconName: "facebook",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "Facebook Seite",
    handle: "Karin Zeit Offiziell",
    url: "https://www.facebook.com/share/1DzZyfFWRL/",
    iconName: "facebook",
    color: "from-blue-700 to-indigo-800",
  },
  {
    name: "TikTok",
    handle: "@karinzeit",
    url: "https://www.tiktok.com/@karinzeit",
    iconName: "tiktok",
    color: "from-neutral-900 to-neutral-800",
  },
  {
    name: "YouTube",
    handle: "@karinzeit",
    url: "https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit",
    iconName: "youtube",
    color: "from-red-600 to-rose-700",
  },
  {
    name: "Threads",
    handle: "@karinzeit",
    url: "https://www.threads.com/@karinzeit",
    iconName: "threads",
    color: "from-stone-900 to-neutral-900",
  },
  {
    name: "Kwai",
    handle: "@kariningrid673",
    url: "https://k.kwai.com/u/@kariningrid673/NxhDbbCg",
    iconName: "kwai",
    color: "from-orange-500 to-amber-600",
  },
];

export interface FoodCheckItem {
  id: string;
  name: string;
  category: 'soothing' | 'trigger' | 'myth';
  statusLabel: string;
  explanation: string;
  tip: string;
}

export const FOOD_DATABASE: FoodCheckItem[] = [
  {
    id: "oats",
    name: "Haferflocken & Haferbrei",
    category: "soothing",
    statusLabel: "Magenfreundlich & Sanft",
    explanation: "Die löslichen Schleimstoffe (Beta-Glucane) kleiden die Magenschleimhaut wie ein Schutzfilm aus und binden überschüssige Magensäure sanft ab.",
    tip: "Mit warmem Wasser oder ungesüßtem Mandeldrink zubereiten – ideal als Frühstück oder Akutbrei.",
  },
  {
    id: "almonds",
    name: "Ungesalzene Mandeln",
    category: "soothing",
    statusLabel: "Akut-Hausmittel",
    explanation: "Durch gründliches Kauen entsteht eine milde Mandelmilch, die lokale Säurespitzen im Magen und der Speiseröhre schnell neutralisiert.",
    tip: "Bei erstem Unbehagen 4–5 ungesalzene Mandeln ganz langsam und fein zerkauen.",
  },
  {
    id: "water",
    name: "Stilles lauwarmes Wasser",
    category: "soothing",
    statusLabel: "Sofort-Helfer",
    explanation: "Spült zurückgeflossene Säure schonend aus der Speiseröhre zurück in den Magen und verdünnt den Mageninhalt ohne Druckaufbau.",
    tip: "Auf kohlensäurehaltiges Wasser verzichten; lauwarmes Wasser in kleinen Schlucken trinken.",
  },
  {
    id: "milk",
    name: "Kuhmilch",
    category: "myth",
    statusLabel: "Vorsicht: Rebound-Gefahr",
    explanation: "Gilt fälschlicherweise oft als Hausmittel. Milch lindert zwar für 5 Minuten, aber Eiweiß und Kalzium stimulieren die Magensäure-Produktion danach massiv (Säure-Rebound).",
    tip: "Besser: Pflanzliche ungesüßte Hafer- oder Mandelmilch in kleinen Mengen wählen.",
  },
  {
    id: "baking_soda",
    name: "Natron / Backpulver",
    category: "myth",
    statusLabel: "Gefährlicher Mythos",
    explanation: "Neutralisiert Säure explosionsartig unter Freisetzung von CO2-Gas. Dies bläht den Magen auf, schwächt den Magenpförtner und provoziert noch mehr Säurerückfluss.",
    tip: "Vermeiden Sie Natron als Routine-Hausmittel; nutzen Sie stattdessen die natürlichen Schutzschilde aus dem Ratgeber.",
  },
  {
    id: "fennel_tea",
    name: "Fenchel-Kümmel-Anis Tee",
    category: "soothing",
    statusLabel: "Krampflösend",
    explanation: "Ätherische Öle entspannen die Magenwandmuskulatur, lindern Völlegefühl und beruhigen gereizte Nerven im Verdauungstrakt.",
    tip: "Nicht kochend heiß trinken, sondern auf angenehme Trinktemperatur abkühlen lassen.",
  },
  {
    id: "coffee",
    name: "Kaffee & Espresso",
    category: "trigger",
    statusLabel: "Bekannter Säure-Booster",
    explanation: "Koffein und Röstsäuren lockern den unteren Speiseröhren-Schließmuskel und feuern die Säureproduktion der Belegzellen an.",
    tip: "Im Ratgeber finden Sie aromatische, magenberuhigende Alternativen für Ihr gewohntes Morgenritual.",
  },
  {
    id: "fried_food",
    name: "Frittiertes & Fettreiches",
    category: "trigger",
    statusLabel: "Starke Verzögerung",
    explanation: "Fett verweilt extrem lange im Magen. Der resultierende Druck zwingt den Magendeckel auf und lässt sauren Magenbrei hochsteigen.",
    tip: "Garen im Dampf oder schonendes Backen im Ofen wählen – Rezepte dazu auf Seite 18.",
  },
];

export const CHAPTERS_OUTLINE = [
  {
    number: "01",
    title: "Sofortmaßnahmen bei akutem Brennen",
    desc: "Was Sie sofort tun können, wenn der Schmerz hochschießt – mit stillen Notfall-Hausmitteln, die sekundenschnell beruhigen.",
    page: "S. 04–08",
  },
  {
    number: "02",
    title: "Die Mythos-Falle entlarvt",
    desc: "Warum beliebte Hausmittel wie Milch und Natron das Brennen nach wenigen Minuten verdoppeln und welche Fehler Sie vermeiden müssen.",
    page: "S. 09–13",
  },
  {
    number: "03",
    title: "Magen-Freunde vs. Säure-Verstärker",
    desc: "Die übersichtliche Ampel-Liste für den Alltag: Was beruhigt den Magen und welche vermeintlich gesunden Lebensmittel schaden.",
    page: "S. 14–19",
  },
  {
    number: "04",
    title: "3 fertige Tagespläne für den Alltag",
    desc: "Vom Aufstehen bis zum Schlafengehen: Drei perfekt aufeinander abgestimmte Tage ohne Rätselraten und ohne langes Kochen.",
    page: "S. 20–24",
  },
  {
    number: "05",
    title: "2 Wohlfühl-Rezepte & smarte Snacks",
    desc: "Schonende, leckere Gerichte und handliche Snack-Ideen für unterwegs und das Büro, wenn sich der kleine Hunger meldet.",
    page: "S. 25–27",
  },
  {
    number: "06",
    title: "Ihr persönlicher Auslöser-Detektor",
    desc: "Mit einfacher Checkliste und Notiz-Vorlage decken Sie in 7 Tagen Ihre individuellen Trigger auf und beugen dauerhaft vor.",
    page: "S. 28–30",
  },
];
