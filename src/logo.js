import logo from './logo.jpg'
function createLogo () {
  var img = new Image()
  img.src = logo
  img.classList.add('logo')
  var root = document.getElementById('root')
  root.append(img)
}
export default createLogo
