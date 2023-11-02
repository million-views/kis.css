# Vite vs Parcel

| Facet                | Parcel           | Vite                | Notes
|----------------------|------------------|---------------------|----------
| Getting started      | Easy             |                     |
| Copy assets to dist  | [???][1.2]       | `publicDir` option  |
| Sass support         | Built-in         | Built-in(*)         | requires pre-processor install
| Build CSS Library    | No doc found     | [vite-css-lib][1.1] |


[1.1]: <https://www.freecodecamp.org/news/build-a-css-library-with-vitejs/> (CSS library using vite)
[1.2]: <https://github.com/parcel-bundler/parcel/issues/3407> (Serving static data)

# Build issues and solutions
Journal of various issues encountered while moving from WebPack to
Parcel, and solutions.

## Sass
- [Can't find stylesheet to import](https://github.com/sass/sass/issues/3269)

## Parcel
- [How to build a library with JS and CSS](https://github.com/parcel-bundler/parcel/issues/7292)
- [External modules are not supported](https://github.com/parcel-bundler/parcel/issues/6769)
  - Removing the `engines` key fixes it