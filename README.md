## recast-api

Lightweight, interactive tool that visualizes api responses, infers type and accepts crud operations. Built to experiment with micro-managing the users experience when working with an api and manipulating the response.

Try it yourself @ [recast](https://main.d1w0icqzyeydgs.amplifyapp.com/)
<br />

[github](https://github.com/AlfredMelson/recast-api.git)
<br />

### Issues / Features to be implemented

updated 05 Jan 2022

- [ ] user preferred color mode (ThemeModeToggle).
- [ ] micro-manage state changes (FetchButtonState).
- [ ] define background color levels.
- [ ] keyboard navigation (folder: action).
- [ ] tsdoc config
- [ ] testing with Jest
- [ ] code splitting ?

$ pwa-asset-generator
npx pwa-asset-generator public/recast.svg public -p 0 -q 100 -m public/manifest.json
npx pwa-asset-generator public/recast.svg public -p 0 --icon-only --favicon --opaque false --maskable false --type png
