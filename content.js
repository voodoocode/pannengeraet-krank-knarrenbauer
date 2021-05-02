const substitutionsFirst = [
    'Aalgerät',
    'Abendbrot',
    'Abfluggate',
    'Abgeweht',
    'Abhörgerät',
    'Affenzeh',
    'Akazienfleck',
    'Aknecreme',
    'Algensee',
    'Allesgeht',
    'Alleskleb',
    'Allesweg',
    'Alter Met',
    'Altgewebt',
    'Ammenschreck',
    'Ammoniak',
    'Ampelgrät',
    'Ampferbeet',
    'Ananasbeet',
    'Angedreht',
    'Angedreht',
    'Angelgrät',
    'Angerät',
    'Angriffskrieg',
    'Ankerbett',
    'Annegate',
    'Annegret',
    'Annektiert',
    'Annregret',
    'Apfelmet',
    'Apfeltee',
    'Arbeitsamt',
    'Armeegebet',
    'Armgedreht',
    'Arschgeweih',
    'Assizeh',
    'Astverdreht',
    'Atemgerät',
    'Aufgedreht',
    'Ausgelebt',
    'Ballergret',
    'Bannegret',
    'Pannengerät',
    'Pansensalat',
    'Panzergret',
    'Stoßgebet',
    'Un-Fair Trade',
    'Undefined',
    'Windgedreht',
    'Windverweht',
];

const substitutionsMiddle = [
    'Band',
    'Ganz',
    'Hanf',
    'Harz',
    'Kampf',
    'Kann',
    'Kant',
    'Katz',
    'Kein',
    'Kennt',
    'Klamm',
    'Klang',
    'Klein',
    'Klotz',
    'Klump',
    'Kommt',
    'Kotz',
    'Krabbe',
    'Kramp',
    'Krampf',
    'Kran',
    'Krank',
    'Kranz',
    'Krebs',
    'Krupp',
    'Land',
    'Lanz',
    'Mampf',
    'Pfand',
    'Pflanz',
    'Punk',
    'Sand',
    'Schrank',
    'Tand',
    'Trump',
    'Trumpf',
    'Wand',
];

const substitutionsLast = [
    'Akkuschrauber',
    'Flaschenknauser',
    'Gartenlaube',
    'Gassenhauer',
    'Harkenklauber',
    'Haubentaucher',
    'Kackebauer',
    'Kackenkarrer',
    'Kalterschauer',
    'Kamelraucher',
    'Kamillenbrauer',
    'Kampfhubschrauber',
    'Kapillarenkalker',
    'Karatehauer',
    'Kardinalvertrauer',
    'Karottenbauer',
    'Karpfenkauer',
    'Karrenbauer',
    'Karrenklauer',
    'Kastratenkrauler',
    'Katerflauer',
    'Katzenjammer',
    'Katzenkrauler',
    'Katzenmiauer',
    'Keilerhauer',
    'Klammerkauer',
    'Klausverhauer',
    'Klimperpower',
    'Kliniktrauer',
    'Kloakenrauer',
    'Klosteinmauer',
    'Knarrenbauer',
    'Knotentauer',
    'Koksanbauer',
    'Kolabrauer',
    'Kolibriklabauter',
    'Konradadenauer',
    'Koreamauer',
    'Krakenkrauler',
    'Kranbauer',
    'Kreisbegatter',
    'Krillverdauer',
    'Krimkalauer',
    'Kroatenlauer',
    'Nasenklauer',
    'Nervenklauer',
    'Neunmalschlauer',
    'Pfaffenhauer',
    'Schinkenklauber',
    'Schnakenfauna',
    'Wackelbauchtier',
    'Wannentaucher',
    'Winterpflaume',
];

const nicknames = [
    'AKK-47',
    'Büchsengretl',
    'CDUzi',
    'Granaten-Gretel',
    'Knarren-Greta',
];

const getRandomEntry = entries => entries[Math.floor(Math.random() * entries.length)]

const pageHtml = document.getElementsByTagName('html')[0].innerHTML;

const regexName = /(?:Annegret )?Kramp-Karrenbauer/gi;
const regexShort = /\bAKK\b(?![ -]47)/gi;

if (pageHtml.match(regexName) || pageHtml.match(regexShort)) {
    const elements = document.getElementsByTagName('*');

    for (const element of elements) {
        for (const node of element.childNodes) {
            if (node.nodeType === 3) {
                const replacementFullname = getRandomEntry(substitutionsFirst) +
                    " " + getRandomEntry(substitutionsMiddle) +
                    "-" + getRandomEntry(substitutionsLast);
                const replacementNickname = getRandomEntry(nicknames);

                const text = node.nodeValue;
                const replacedText = text.replace(regexName, replacementFullname).replace(regexShort, replacementNickname);

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}
