Keep It Simple CSS
==================

## Overview
KIS.CSS (pronounced as 'kisses') is a `forward looking` CSS library
that is minimal and lightweight in terms of functionality and size.

> Keep it simple. Focus on functionality. Visual design and scale
> come after an idea comes to life, not before.

## Why did we create this?
At our search lab, we spin through testing ideas that have a half-life
of less than two weeks most of the time. To get to a functional and
usable state before the idea decays, we needed a CSS library that let
the idea come to life without suffering from undue cognitive load to
get something displayed on the screen that is decent to look at. Such
a library should not restrict or dictate our choices in visual design
down the road.

Our goal is to be able to get to a testable product fast without losing
the ability to improve on the visual aesthetics later. We think using
large and complex CSS libraries during conception stage is not the right
choice for validating product ideas.


## Features
- [x] Designed to make semantic html look good without classes (wip)
- [x] Mobile first css (wip)
- [x] Pure CSS to enable easy integration with popular reactive JS frameworks

## Development
> If using [Yarn](https://yarnpkg.com/), `yarn` can replace all occurences
> of `npm` in the command line below. :ok_hand:

If live-server is not installed globally do so now.
```
# is live-server installed ?
$ which live-server

# if not installed, install it now
$ npm install --global live-server
```

### Tasks
|  task   | command line          | notes                                         |
|:--------|:----------------------|:----------------------------------------------|
| install |```npm install```      | installs dependencies                         |
| lint    |```npm run lint```     | run eslint on `src` folder                    |
| lint:fix|```npm run lint:fix``` | run eslint on `src` folder                    |
| test    |```npm run test```     | simple render test                            |
| build   |```npm run build```    | compile to `build` folder                     |
| start   |```npm run start```    | web serve `build` folder                      |
| watch   |```npm run watch```    | watch/build changes to `app` and `web` folders|

## Integrating kiscss in your application

## TODO
- [ ] Documentation (WIP, in the meantime take a look at the demo app)
- [x] Write instructions on how to use git subtree for integration
- [ ] Enhance core/* to make webby apps look better out of the box
- [ ] Semver based release management
- [ ] Iterate on mobile first css (as bugs get reported)

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
