import './styles.css';
import { homePage } from './home-page';
import { menuPage } from './menu-page';
import { contactPage } from './contact-page';
import { render } from './components';

const runPage = (function() {

  const headerElement = document.createElement('div')
  headerElement.classList.add('header')
  document.body.appendChild(headerElement)

  const footerElement = document.createElement('div')
  footerElement.classList.add('footer')
  document.body.appendChild(footerElement)

  const init = function() {
    _createElements()
    _bindEvents()
    render()
    homePage()
  }

  const _btn = function(text, i) {
    let btn = document.createElement('button')
    btn.id = `btn${i}`
    btn.textContent = text
    if (btn.id == 'btn1') {
      btn.classList.add('black-border')
    }
    headerElement.appendChild(btn)
  }

  const _createElements = function() {
    _btn('Home', 1)
    _btn('Menu', 2)
    _btn('Contact', 3)
  }

  const _changeButtonBorder = function (a, b, c) {
    document.getElementById(`btn${a}`).classList.add('black-border')
    document.getElementById(`btn${b}`).classList.remove('black-border')
    document.getElementById(`btn${c}`).classList.remove('black-border')
  }

  const _homeFunc = function () {
    homePage()
    _changeButtonBorder(1, 2, 3)
  }

  const _menuFunc = function () {
    menuPage()
    _changeButtonBorder(2, 1, 3)
  }

  const _contactFunc = function () {
    contactPage()
    _changeButtonBorder(3, 1, 2)
  }


  const _bindEvents = function() {
    document.getElementById('btn1').addEventListener('click', _homeFunc)
    document.getElementById('btn2').addEventListener('click', _menuFunc)
    document.getElementById('btn3').addEventListener('click', _contactFunc)
  }
  
  return { init }

})();

runPage.init();