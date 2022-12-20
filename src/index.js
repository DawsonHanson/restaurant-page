import './styles.css';
import { homePage } from './home-page';
import { menuPage } from './menu-page';
import { contactPage } from './contact-page';
import { render } from './components';

const runPage = (function() {

  const headingElement = document.createElement('div')
  headingElement.classList.add('heading')
  document.body.appendChild(headingElement)

  const footerElement = document.createElement('div')
  footerElement.classList.add('footer')
  document.body.appendChild(footerElement)

  const init = function() {
    _createElements()
    _bindEvents()
  }

  const _btn = function(text, i) {
    let btn = document.createElement('button')
    btn.id = `btn${i}`
    btn.textContent = text
    headingElement.appendChild(btn)
  }

  const _createElements = function() {
    _btn('Home', 1)
    _btn('Menu', 2)
    _btn('Contact', 3)
  }

  const _bindEvents = function() {
    document.getElementById('btn1').addEventListener('click', homePage)
    document.getElementById('btn2').addEventListener('click', menuPage)
    document.getElementById('btn3').addEventListener('click', contactPage)
  }
  
  render()
  homePage()
 
  return { init }

})();

runPage.init();