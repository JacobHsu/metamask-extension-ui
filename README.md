# metamask-extension-ui

MetaMask / [metamask-extension](https://github.com/MetaMask/metamask-extension)

yarn.lock 要複製

## gulpfile.js

only build chrome

```js
const browserPlatforms = [
  //'firefox',
  'chrome',
  // 'brave',
  // 'opera',
]

gulp.task('dev:copy',
  gulp.series(
    gulp.parallel(...copyDevTaskNames),
    //'manifest:dev',
    'manifest:chrome',
    //'manifest:opera'
  )
)
```

## 無法載入擴充功能

無法載入背景指令碼「bg-libs.js」

```js
createTasksForBuildJsDeps({ filename: 'bg-libs', key: 'background' })

gulp.task('dev:extension',
  gulp.series(
    'clean',
    'dev:scss',
    gulp.parallel(
      'build:extension:js:deps:background', //build bg-libs.js
      //'build:extension:js:deps:ui',  // build ui-libs.js
      'dev:extension:js',
      'dev:copy',
      'dev:reload'
    )
  )
)
```

popup.html

```html
    <script src="./ui-libs.js" type="text/javascript" charset="utf-8"></script>
    <script src="./ui.js" type="text/javascript" charset="utf-8"></script>
```

## sourcemaps

關閉 sourcemaps  可將 `ui.js` 檔案 50M降到10M

```js
const sourcemaps = require('gulp-sourcemaps')
function createTasksForBuildJsExtension (
    bundleTaskOpts = Object.assign({
    buildSourceMaps: false, // true
    sourceMapDir: '../sourcemaps',
```

```js
   // bundle tasks
  const bundleTaskOpts = Object.assign({
    buildSourceMaps: false, // true
    sourceMapDir: '../sourcemaps',
    minifyBuild: true,
    devMode: false,
  })
```

## manifest.json

remove vendor/trezor

```js
  "content_scripts": [
    {
      "matches": [
        "file://*/*",
        "http://*/*",
        "https://*/*"
      ],
      "js": [
        "contentscript.js"
      ],
      "run_at": "document_start",
      "all_frames": true
    }
  ],
```

## References

[gulp-livereload](http://kejyun.github.io/gulp-learning-notes/plguins/Tool/Plugins-Tool-gulp-livereload.html)