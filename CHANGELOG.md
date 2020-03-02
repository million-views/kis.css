Change Log
==========
Changes that require better visibility than from a commit log will be
documented here.

TLA used in this document:
- TD      => Technical Debt
- FIX     => A bug fix 
- CHORE   => Grunt work, maintenance or just a chore [duh!]

## [0.4.01] - 03MAR2020
- TD: Versionitis strikes again. Keep up with the version bumps in JS packages
- FIX: Interesting security catch by ESLINT. See https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
- CHORE: add this file; see https://keepachangelog.com/en/1.0.0/
- CHORE: bump version
- FIX: Jest -> SyntaxError: Cannot use import statement outside a module
  - The links below were explored to find a fix. Starred links (*) provided the best clues:
    - https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module
    - https://github.com/RGPosadas/WayFinder/issues/27
- FIX: Jest fallout due to upgrades including node to v13.9.0
  - The fix is to transpile when running Jest. And treat cfg files as commonjs while
    the rest of the codebase gets treated as es6 modules. See links below for the trail:
    - https://github.com/facebook/jest/issues/4842
    - https://github.com/facebook/jest/issues/9086
    - https://babeljs.io/docs/en/babel-preset-env#options
    - https://jestjs.io/blog/2020/01/21/jest-25.html#ecmascript-modules-support
