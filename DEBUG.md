# chrome://extensions/?errors

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