// import Header from './header.js'
// import Content from './content.js'
// import Footer from './footer.js'
// new Header()
// new Content()
// new Footer()



import logo from './logo.jpg'
import './index.scss'

var img = new Image()
img.src = logo
img.classList.add('logo')
var root = document.getElementById('root')
root.append(img)


