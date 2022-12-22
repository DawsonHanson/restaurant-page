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

export const subHeading = (text) => {
  let element = document.createElement('div')
  let h2 = document.createElement('h1')
  h2.textContent = text
  element.classList.add('place-holder')
  element.appendChild(h2)
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

export const infoBlock = (name, info) => {
  let element = document.createElement('div')
  let p = document.createElement('p')
  let h3 = document.createElement('h3')
  p.textContent = info
  h3.textContent = name
  element.classList.add('place-holder')
  element.appendChild(h3)
  element.appendChild(p)
  content.appendChild(element)
}

export const menuItem = (name, info, price, imgSrc) => {
  let element = document.createElement('div')
  let p = document.createElement('p')
  let h3 = document.createElement('h3')
  let h4 = document.createElement('h4')
  let img = document.createElement('img')
  p.textContent = info
  h3.textContent = name
  h4.textContent = `$${price}`
  img.src = imgSrc
  element.classList.add('place-holder')
  element.appendChild(h3)
  element.appendChild(p)
  element.appendChild(h4)
  element.appendChild(img)
  content.appendChild(element)
}

export const contactInfoBlock = (name, position, number, email, imgSrc) => {
  let element1 = document.createElement('div')
  let element2 = document.createElement('div')
  let p1 = document.createElement('p')
  let p2 = document.createElement('p')
  let p3 = document.createElement('p')
  let h3 = document.createElement('h3')
  let img = document.createElement('img')
  p1.textContent = position
  p2.textContent = number
  p3.textContent = email
  h3.textContent = name
  img.src = imgSrc
  element1.classList.add('place-holder')
  element2.classList.add('contact-info')
  element2.appendChild(p1)
  element2.appendChild(p2)
  element2.appendChild(p3)
  element1.appendChild(h3)
  element1.appendChild(element2)
  element1.appendChild(img)
  content.appendChild(element1)
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