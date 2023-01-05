const content = document.createElement('div')
content.classList.add('container')

export const heading = (text, imgSrc) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let h1 = document.createElement('h1')
  let img1 = document.createElement('img')
  let img2 = document.createElement('img')
  h1.textContent = text
  img1.src = imgSrc
  img2.src = imgSrc
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('heading')
  element.appendChild(img1)
  element.appendChild(h1)
  element.appendChild(img2)
  wrapper.appendChild(element)
  content.appendChild(wrapper)
}

export const subHeading = (text, imgSrc) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let h2 = document.createElement('h2')
  let img = document.createElement('img')
  h2.textContent = text
  img.src = imgSrc
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('sub-heading')
  element.appendChild(h2)
  element.appendChild(img)
  wrapper.appendChild(element)
  content.appendChild(wrapper)
}

export const reviewBlock = (review, name) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let p = document.createElement('p')
  let h3 = document.createElement('h3')
  p.textContent = review
  h3.textContent = name
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('review-block')
  element.appendChild(p)
  element.appendChild(h3)
  wrapper.appendChild(element)
  content.appendChild(wrapper)
}

export const infoBlock = (name, info) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let p = document.createElement('p')
  let h3 = document.createElement('h3')
  p.textContent = info
  h3.textContent = name
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('info-block')
  element.appendChild(h3)
  element.appendChild(p)
  wrapper.appendChild(element)
  content.appendChild(wrapper)
}

export const menuItem = (name, info, price, imgSrc) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let subElement1 = document.createElement('div')
  let subElement2 = document.createElement('div')
  let p = document.createElement('p')
  let h3 = document.createElement('h3')
  let h4 = document.createElement('h4')
  let img = document.createElement('img')
  p.textContent = info
  h3.textContent = name
  h4.textContent = `$${price}`
  img.src = imgSrc
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('menu-item-container')
  subElement1.appendChild(h3)
  subElement1.appendChild(p)
  subElement2.appendChild(h4)
  subElement2.appendChild(img)
  element.appendChild(subElement1)
  element.appendChild(subElement2)
  wrapper.appendChild(element)
  content.appendChild(wrapper)
}

export const contactInfoBlock = (name, position, number, email, imgSrc) => {
  let wrapper = document.createElement('div')
  let element = document.createElement('div')
  let contactInfo = document.createElement('div')
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
  wrapper.classList.add('gradient-wrapper')
  element.classList.add('contact-info')
  contactInfo.appendChild(p1)
  contactInfo.appendChild(p2)
  contactInfo.appendChild(p3)
  element.appendChild(h3)
  element.appendChild(contactInfo)
  element.appendChild(img)
  wrapper.appendChild(element)
  content.appendChild(wrapper)
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