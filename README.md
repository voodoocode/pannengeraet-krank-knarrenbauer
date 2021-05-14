# Pannengerät Krank-Knarrenbauer

Browser extension, which replaces _Ammenschreck Krebs-Katzenjammer_ by silly names.
Finds the combination of first name and last, or only last name.

It is also possible to enable some other replacements for other persons in the extensions settings page.

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

## 🕰 Version history

### ✨ v0.4: Options page to toggle replacements and disabling other names

By default this restores the original behavoiur of the extension, only replacing AKK.

It disables the other replacements introduced in the previous version.
You are now free to choose which replacements are enabled via the extensions settings page (Extras > Add-ons > Extensions > Choose the extenstion > switch to second tab).

### v0.3: Replacement of other people

Other relevant people are being found and replaced with silly names.

I added some logic/randomness wheter a combined name of first-, middle- and lastname is used _or_ a full nickname.

## ℹ️ Notice

Use browser extensions at your own risk.

Always reassure that the extension didn't edit any input fields or textareas in the browser, like Github or other sites where frontend editing is possible.

I'm not responsible for possible wrong submitted data or reduced rendering performance.

## 🔀 Contribution

Feel free to open pull requests with new names or persons.

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
- Before submitting code:
  please use Prettier by using `npx prettier --write .`

## 👍 Credits

- Inspiration and original substitutions come from this [reddit.com/r/de thread](https://old.reddit.com/r/de/comments/cea32a/kleine_ansammlung_von_namensbausteinen_und/)

- Forked from https://github.com/viktorsec/bumpercar-candysnatch
- Or write an issue with suggestions and I'll add them later

- Thanks to all the contributors, be it PRs, suggestions on reddit or whatever
