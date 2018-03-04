# React-scripts - T3

This project is a fork of `create-react-apps` `react scripts` directory.

## Changes from create-react-app:

1. SCSS - [sass loader](https://github.com/webpack-contrib/sass-loader) has been added and configured to compile any `.scss` file in the `src` directory

2. [webpack-bundle-tracker](https://github.com/ezhome/webpack-bundle-tracker) - webpack plugin that exposes the file names for output bundles for Django apps to consume

3. [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) - webpack plugin that outputs an interactive mapping of the JavaScript bundle to describe JS library sizes

4. Testing libaries - includes [Enzyme](https://github.com/airbnb/enzyme), [Chai](http://chaijs.com/), and [Sinon](http://sinonjs.org/) by default for more advanced testing capability

5. CI - A [`.gitlabci.yml`](https://docs.gitlab.com/ee/ci/README.html) file that runs a simple build > test > lint pipeline over the project. By default linter failures will only output warnings.
