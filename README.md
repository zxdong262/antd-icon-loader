# antd-icon-loader
a loader to help using custom antd icons without extra effort.

## how to use

- install antd-icon-loader
```bash
npm i -D antd-icon-loader
```

- in webpack
```js
...
  module: {
    rules: [
      {
        test: /\.less$/,
        use: extractTextPlugin1.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: [
            {
              loader: 'antd-icon-loader',
              options: {

                //relative path to your css path
                path: '../../_bc/electerm-resource/res/fonts',

                //version, will add to icon source url to help clear cache
                version: 'v0.12.0'
              }
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true
              }
            }
          ]
        })
      },
...
```

- in .babelrc
```
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "style": true
      }
    ]
  ]
}
```

- done, the css output will be like this
```css
@font-face {
  font-family: 'anticon';
  src: url('../../_bc/electerm-resource/res/fonts/iconfont.eot?t=v0.12.0');
  /* IE9*/
  src: url('../../_bc/electerm-resource/res/fonts/iconfont.woff?t=v0.12.0') format('woff'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/ url('../../_bc/electerm-resource/res/fonts/iconfont.ttf?t=v0.12.0') format('truetype'), /* iOS 4.1- */ url('../../_bc/electerm-resource/res/fonts/iconfont.svg?t=v0.12.0#iconfont') format('svg');
}
```

## License
MIT

