# webpack-experimenting

A playground for playing around with webpack and various configuration experiments.

## Builds

The below commands refer to binaries explicitly for simplicity.  These commands will need to be in npm scripts where the binaries are available, or have ./node_modules/.bin/ on your path, or use something like npm-run, or have these packages installed globally (ick), etc.

Run webpack build with config in default location (./webpack.config.js):
```
webpack
```

Run webpack build with custom config location:
```
webpack --config build/webpack-local.config.js
```

Run webpack with minification:
```
webpack -p
```

Run webpack build in watch mode, where build is output but webpack continues watching for changes and re-builds:
```
webpack --watch
  OR
add watch:true config option to webpack config file
```

Run webpack dev server, which watches for changes, updates an in-memory build, and updates the browser to reflect those changes.  Note the `--inline` option includes the browser-reload client in the bundle so it works at localhost:8080/ and not just localhost:8080/webpack-dev-server/
```
webpack-dev-server --config build/webpack-local.config.js --inline
```
