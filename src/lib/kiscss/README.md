Keep It Simple CSS
==================

## Overview
Kiscss (pronounced as 'kisses') is yet another CSS library designed to
be minimal and out of your way when you want to focus on functionality.

This repository contains the source code for the library. The organization
of the code should allow for adding it as a sub-folder in your project using
git subtree add command. We think this is a better way to integrate than
using NPM registry.

The [parent project](https://github.com/million-views/kis.css) illustrates
how the kiscss library integrates using webpack and a sample react test
application.

We created kiscss to fit our needs. We took inspiration from the following
css libraries and references (on how to AND how not to) in creating kis.css:
### Libraries
- normalize.css
- picnic.css
- balloon.css
- HiQ. A high-IQ CSS
- Bulma

### References
- http://oxygencss.com/book/02-oxygen-naming-conventions.html
- https://inclusive-components.design/
- https://rocssti.net/en/code-css-source-rocssti
- https://material.io/design/
- https://material.io/develop/web/components/typography/
- https://learnui.design/blog/mobile-desktop-website-font-size-guidelines.html

## Features
- [x] Designed to make semantic html look good without classes (wip)
- [x] Mobile first css (wip)
- [x] Pure CSS to enable easy integration with popular reactive JS frameworks

## TODO
- [ ] Documentation (WIP, in the meantime take a look at the demo app)
- [ ] Write instructions on how to use git subtree for integration
- [ ] Enhance core/* to make webby apps look better out of the box
- [ ] Semver based release management
- [ ] Iterate on mobile first css (as bugs get reported)
- [ ] Make this project be the source of truth, split away from parent.

## Credits and attribution
- [normalize.css](http://nicolasgallagher.com/about-normalize-css/)
- ```kitchen-sink.html``` came from [HiQ](https://github.com/jonathanharrell/hiq)
- Most of the content for the test home page came from [PicnicCss](https://github.com/franciscop/picnic)
- Inspiration and alignment to principles of simplicity came from HiQ and PicnicCSS
- Baseline scss code for kiscss came from PicnicCss which is under MIT License
- Tooltip code adopted from [balloon.css](https://kazzkiq.github.io/balloon.css/)
- Tabs code adopted from [mikestreety](https://codepen.io/mikestreety/pen/yVNNNm)
- Nav code adopted from [mutedblues](https://codepen.io/mutedblues/pen/MmPNPG)

## Alternatives
You have choices. Turns out we are not alone in our thinking. Search for
'lightweight' and 'classless' css libraries in the [awesome css frameworks list](https://github.com/troxler/awesome-css-frameworks/blob/master/readme.md) maintained by [Troxler?](https://github.com/troxler).

## License
MIT