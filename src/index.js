// import Header from './header.js'
// import Content from './content.js'
// import Footer from './footer.js'
// new Header()
// new Content()
// new Footer()


// console.log('webpack dev server!!!!')

// import logo from './logo.jpg'
// import './index.css'
// import createLogo from './logo.js'

// var button = document.createElement('button')
// button.innerHTML = 'add'
// button.onclick = function() {
//   var div = document.createElement('div')
//   div.innerHTML = 'div'
//   document.body.appendChild(div)
// }
// document.body.appendChild(button)

import counter from './counter'
import number from './number'
counter()
number()

if (module.hot) {
  module.hot.accept('./number.js', function() {
    // Do something with the updated library module...
    document.body.removeChild(document.getElementById('number'))
    number()
  });
}

// createLogo()
// var img = new Image()
// img.src = logo
// img.classList.add('iconfont','iconxiaoxi')

// var root = document.getElementById('root')
// root.innerHTML = '<div class="iconfont iconxiaoxi"></div>'
// root.append(img)


