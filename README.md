## console.img 
在 Webkit 内核浏览器开发人员工具控制台面板输出图片

[![NPM Version](https://img.shields.io/npm/v/console.img.svg)](https://www.npmjs.com/package/console.img)
[![LICENSE](https://img.shields.io/npm/l/console.img.svg)](https://www.npmjs.com/package/console.img)
[![NPM Download](https://img.shields.io/npm/dw/console.img.svg)](https://www.npmjs.com/package/console.img)
[![Travis](https://img.shields.io/travis/u3u/console.img.svg)](https://travis-ci.org/u3u/console.img)
[![GitHub issues](https://img.shields.io/github/issues/u3u/console.img.svg)](https://github.com/u3u/console.img/issues)
[![Github All Releases](https://img.shields.io/github/downloads/u3u/console.img/total.svg)](https://github.com/u3u/console.img)

## 预览

![Preview](http://i1.piimg.com/549484/15d25b70e7deb19f.gif)

## 安装

```sh
$ npm i -S console.img
```

## 使用CDN

由饿了么提供：[//npm.elemecdn.com/console.img@版本号/dist/console.img.min.js](//npm.elemecdn.com/console.img@1.0.5/dist/console.img.min.js)

```javascript
var script = document.createElement('script')
script.src = '//github.elemecdn.com/u3u/console.img/master/dist/console.img.min.js'
script.onload = () => console.img('http://ww2.sinaimg.cn/bmiddle/86885b06gy1fev92c193nj20qo1benpd.jpg')
document.body.appendChild(script)
```

## 用法

```javascript
// 引入模块
import 'console.img'

// 输出默认图片预览
console.img()

// 输出指定 URL 图片
console.img('http://ww2.sinaimg.cn/bmiddle/86885b06gy1fev92c193nj20qo1benpd.jpg')

// 输出指定 URL 图片并指定图片宽度
console.img('http://tvax3.sinaimg.cn/crop.0.0.640.640.180/006r446Hly8ff6s4145i0j30hs0hsjs8.jpg', 100)

// 输出指定 URL 图片并指定图片宽度和高度
console.img('http://imgsrc.baidu.com/forum/w%3D580/sign=4b27d3554890f60304b09c4f0913b370/e42eb6003af33a8728f55f7ec45c10385243b5d5.jpg', 400, 200)
```

