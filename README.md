# Typescript-Mocha-Istanbul-Boilerplate
An example node project to produce coverage of TypeScript sources using:

- Mocha
- Istanbul ([nyc](https://github.com/istanbuljs/nyc))
- tsc
- npm scripts

The coverage report shows the typescript (rather than transpiled) code. That is, sourcemaps are properly handled.

    $ npm install
    $ npm run test:coverage
        
Sample output:

```sh
---------------|----------|----------|----------|----------|----------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
---------------|----------|----------|----------|----------|----------------|
All files      |      100 |      100 |      100 |      100 |                |
 Point.spec.ts |      100 |      100 |      100 |      100 |                |
 Point.ts      |      100 |      100 |      100 |      100 |                |
 Rect.spec.ts  |      100 |      100 |      100 |      100 |                |
 Rect.ts       |      100 |      100 |      100 |      100 |                |
---------------|----------|----------|----------|----------|----------------|
```
