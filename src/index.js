// import Header from './header.js'
// import Content from './content.js'
// import Footer from './footer.js'
// new Header()
// new Content()
// new Footer()


import logo from './logo.jpg'
import style from './index.scss'
import createLogo from './logo.js'

createLogo()
var img = new Image()
img.src = logo
img.classList.add(style.logo)
var root = document.getElementById('root')
root.append(img)


