# Pannengerät Krank-Knarrenbauer

Browser extension, which replaces _Ammenschreck Krebs-Katzenjammer_ (and other persons) by silly names.
Finds the combination of first name and last, only last name and also the abbreviation _AKK_ initials.

## 🛠 Installation

### Firefox (>= 51)

- Get the extension from the [Firefox Add-ons page](https://addons.mozilla.org/de-DE/firefox/addon/pannengerat-krank-knarrenbauer/)

or

- download the repo
- open `about:debugging`
- click "Load Temporary Add-on"
- select any file in your extension's directory, e.g. `manifest.json`

### Chrome / Opera / Edge (>= 76)

- download the repo
- open `chrome://extensions/` (or `opera://extensions/` or `edge://extensions/`)
- toggle "Developer mode" switch on
- click button "Load unpacked"
- choose the folder of the repo

## 👍 Credits

- Inspiration and original substitutions come from this [reddit.com/r/de thread](https://old.reddit.com/r/de/comments/cea32a/kleine_ansammlung_von_namensbausteinen_und/)

- Forked from https://github.com/viktorsec/bumpercar-candysnatch
- Or write an issue with suggestions and I'll add them later

- Thanks to all the contributors, be it PRs, suggestions on reddit or whatever

## Version history

### ✨ New in v0.3: Replacement of other people

As per public request on r/de:

Other relevant people are being found and replaced with silly names.

I added some logic/randomness wheter a combined name of first-, middle- and lastname is used _or_ a full nickname.

## Contribution

Feel free to open pull requests with new names or persons.

NOTICE: be sure to not have the extension activated in the browser, when using the Github frontend editor.
It will probably also do it's replacements in there and introduce bugs. This will be fixed in a future version, but just to be sure.

When adding new persons follow this format of the object:

```javascript
{
    regexName: /(?:Vorname )?Nachname/gi, // looking for optional firstname, lastname not optional
    regexAbbrev: /VN/gi,
    substitutionsFirst: ["Vorname1"],
    substitutionsMiddle: ["Zwischenname1"],
    substitutionsLast: ["Nachname1"], // for hyphen "-" concatenated, names add those in front of the lastname
    substitutionsComplete: ["Spitzname1"],
  }
```

Please don't submit stuff, that is out of the borders of satire.

## 🔨 Development

- first do: `npm install`
- for development in Firefox run `npm run start:firefox`
- the extension will reload if any source file changes

Please use Prettier by using `npx prettier --write .`
