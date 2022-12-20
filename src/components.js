const content = document.createElement('div')
content.classList.add('container')

export const heading = (text) => {
  let element = document.createElement('div')
  let h1 = document.createElement('h1')
  h1.textContent = text
  element.classList.add('place-holder')
  element.appendChild(h1)
  content.appendChild(element)
}

export const reviewBlock = (review, name) => {
  let element = document.createElement('div')
  let p = document.createElement('p')
  let h3 = document.createElement('h3')
  p.textContent = review
  h3.textContent = name
  element.classList.add('place-holder')
  element.appendChild(p)
  element.appendChild(h3)
  content.appendChild(element)
}

export const render = () => {
  document.body.appendChild(content)
}

export const clearDOM = () => {
  let element = document.querySelector('.container');
  while (element.lastElementChild) {
    element.removeChild(element.lastElementChild)
  }
}