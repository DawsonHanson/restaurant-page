import { heading, subHeading, menuItem, clearDOM } from "./components"
import controllerImg from './imgs/controller.svg'
import gemImg from './imgs/gem.svg'
import coffeeImg from './imgs/coffee.jpg'
import mtndewImg from './imgs/mtndew.png'
import energyDrinkImg from './imgs/energy-drink.jpg'
import doritosImg from './imgs/doritos.png'
import toastImg from './imgs/toast.jpg'
import pizzaPopImg from './imgs/pizza-pop.png'
import bagelBitesImg from './imgs/bagel-bites.png'
import cheesePuffsImg from './imgs/cheese-puffs.jpg'
import chickenNuggetsImg from './imgs/chicken-nuggets.png'
import fruitVegPlatterImg from './imgs/fruit-veg-platter.jpg'

export const menuPage = () => {
  
  clearDOM()

  heading('Menu', controllerImg)

  subHeading('Beverages', gemImg)
  menuItem('Coffee', 'Can\'t go wrong with good ol coffee, mix in a bunch of sugar and you\'ll be good for hours.', '3.99', coffeeImg)
  menuItem('Mountain Dew\u2122', 'Glorious Mountain Dew in either original, Code Red, Voltage or Baja Blast flavors.', '4.99', mtndewImg)
  menuItem('Energy Drinks', 'We offer Monster, RedBull and RedRain. Who doesn\'t love a good energy drink.', '6.99', energyDrinkImg)

  subHeading('Sides', gemImg)
  menuItem('Doritos\u2122', 'A classic bag of original Doritos, pairs wonderfully with our selection of Mountain Dew.', '5.99', doritosImg)
  menuItem('Toast', '2 slices of bread toasted to you\'r liking, with condiment options of jam, butter, peanut butter and Nutella spread.', '2.99', toastImg)

  subHeading('Main Dishes', gemImg)
  menuItem('Pizza Pops\u2122', '2 Good old Pizza Pops microwaved to perfection, quick and easy so you can get back to what you love doing most, gaming!', '4.99', pizzaPopImg)
  menuItem('Bagel Bites\u2122', '10 classic cheese and pepperoni Bagel Bites, enough to hold over any pro gamer.', '6.99', bagelBitesImg)
  menuItem('Cheese Puffs', 'With our home made four cheese blend and various spices, these 12 cheesy doughy things are the perfect meal replacement for on the go gamers.', '10.99', cheesePuffsImg)
  menuItem('Chicken Nuggets', 'From freezer to oven to you\'r plate, you\'ll get 8 perfectly breaded chicken nugget patties that just cant\'t be beat! Comes with a choice of dipping sauce.', '8.99', chickenNuggetsImg)
  menuItem('Fruits & Vegetables', 'Scary and foreign to many gamers, this plate of finely selected fruits and vegetables will aid in gaming ability. By helping one\'s eye sight and preventing scurvy! Comes with a glass of water... you should probably drink it.', '6.99', fruitVegPlatterImg)
}