/*
 * @Author: @u3u
 * @Date: 2017-05-03 23:05:18
 * @Last Modified by: @u3u
 * @Last Modified time: 2017-05-05 13:46:06
 */

console.img = function (url = 'https://q4.qlogo.cn/g?b=qq&nk=485463145&s=140') {
  /* global Image */
  if (!window.hasOwnProperty('Image')) {
    console.warn('您的浏览器不支持 Image 对象')
    return
  }

  // 校验 URL 是否正确
  if (!/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/.test(url)) {
    console.warn('URL 格式不正确')
    return
  }

  const img = new Image()
  img.onload = evt => {
    const image = evt.target
    const width = arguments[1] || image.width
    const height = arguments[2] || image.height
    console.log('%c', `font-size: 0; padding: ${height / 2}px ${width / 2}px; line-height: ${height}px; background: url(${url}) no-repeat 50% / 100%`)
  }
  img.src = url
}

console.img.toString = () => 'function img () { [native code] }'
