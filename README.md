# Pannengerät Krank-Knarrenbauer

Browser extension, which replaces _Ammenschreck Krebs-Katzenjammer_ by silly names.
Finds the combination of first name and last, only last name and also the abbreviation _AKK_ of her initials.

## 🛠 Installation

### Firefox (>= 51)

- Get the extension from the [Firefox Add-ons page](https://addons.mozilla.org/en-US/firefox/addon/pannengerat-krank-knarrenbauer/)

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
- Feel free to open pull requests with new names!
- Or write an issue with suggestions and I'll add them later

- Thanks to all the contributors, be it PRs, suggestions on reddit or whatever

## 🔨 Development

- first do: `npm install`
- for development in Firefox run `npm run start:firefox`
- the extension will reload if any source file changes
