import { heading, reviewBlock, infoBlock, clearDOM } from "./components"
import controllerImg from './imgs/controller.svg'
import gamerImg from './imgs/gamer.svg'

export const homePage = () => {

  clearDOM()
  
  heading('Eats For Gamers', controllerImg)
  reviewBlock('When it was 3 in the morning and my stomach started rumbling, I knew immediately that Eats For Gamers was the place for me! I was greeted by very friendly staff, service was quick and the food was amazing.', 'Awesome Pro Gamer', gamerImg)
  infoBlock('Hours', 'Here at Eats For Gamers we are proud to announce our new 24/7 hours of operation, as no matter the time nor day we want to serve the pro-gamer in everyone!')
  infoBlock('Location', '#1337 Who-Knows Blvd SE, Calgary AB, W1A S2D')
}
