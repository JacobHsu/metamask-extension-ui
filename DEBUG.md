# chrome://extensions/?errors

> Warning: componentWillMount has been renamed, and is not recommended for use

[`componentWillMount` warnings although no explicitly used](https://stackoverflow.com/questions/58769752/componentwillmount-warnings-although-no-explicitly-used)

app\scripts\ui.js `console.warn = () => {}` 關閉警告


npx react-codemod rename-unsafe-lifecycles

[（注意：这里使用的是 npx，不是 npm ，npx 是 Node 6+ 默认提供的实用程序。）](https://segmentfault.com/a/1190000020074818)
运行 codemod 将会替换旧的生命周期，如 componentWillMount 将会替换为 UNSAFE_componentWillMount

> Translator - Unable to find value of key "localhost" for locale "zh_TW"

ui\app\helpers\utils\i18n-helper.js

> WebSocket connection to 'ws://localhost:8097/' failed: Error in connection establishment: net::ERR_CONNECTION_REFUSED

此錯誤由 ui.js 載入 require-react-devtools.js  `require('react-devtools')` 造成

gulpfile.js

```js
function generateBundler
    if (!opts.buildLib) {
    //   if (opts.devMode && opts.filename === 'ui.js') {
    //     browserifyOpts['entries'] = ['./development/require-react-devtools.js', opts.filepath]
    //   } else {
    //     browserifyOpts['entries'] = [opts.filepath]
    //   }
      browserifyOpts['entries'] = [opts.filepath] 
    }
```

> WebSocket connection to 'ws://localhost:8000/socketcluster/' failed WebSocket is closed before the connection is established.

嘗試連結 remote-redux-devtools

ui\app\store\store.js

```js
export default function configureStore (initialState) {
  // const composeEnhancers = composeWithDevTools({
  //   name: 'MetaMask',
  //   hostname: 'localhost',
  //   port: 8000,
  //   realtime: Boolean(process.env.METAMASK_DEBUG),
  // })
  // return createStore(rootReducer, initialState, composeEnhancers(
  //   applyMiddleware(
  //     thunkMiddleware,
  //   ),
  // ))
  return createStore(rootReducer, initialState, 
    applyMiddleware(
      thunkMiddleware,
    )
  )
}
```