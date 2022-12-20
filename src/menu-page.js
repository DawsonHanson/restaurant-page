import { heading, subHeading, menuItem, clearDOM } from "./components"
import tempImg from './imgs/food-template.png'

export const menuPage = () => {
  
  clearDOM()

  heading('Menu')

  subHeading('Beverages')
  menuItem('Coffee', 'Can\'t go wrong with good ol coffee, mix in a bunch of sugar and you\'ll be good for hours.', 3, tempImg)
  menuItem('Mountain Dew', 'Glorious Mountain Dew in either original, Code Red, Voltage or Baja Blast flavors.', 4, tempImg)
  menuItem('Energy Drinks', 'We offer Monster, RedBull and RedRain. Who doesn\'t love a good energy drink.', '4-6', tempImg)

  subHeading('Sides')
  menuItem('Doritos', 'A classic bag of original Doritos, pairs wonderfully with our selection of Mountain Dew.', 5, tempImg)
  menuItem('Toast', '2 slices of bread toasted to you\'r liking, with condiment options of jam, butter, peanut butter or Nutella spread.', 2, tempImg)

  subHeading('Main Dishes')
  menuItem('Pizza Pops', '2 Good old Pizza Pops microwaved to perfection, quick and easy so you can get back to what you love doing most, gaming!', 4, tempImg)
  menuItem('Bagel Bites', '10 classic cheese and pepperoni Bagel Bites, enough to hold over any pro gamer.', 6, tempImg)
  menuItem('Cheese Puffs', 'With our home made four cheese blend and various spices, these 12 cheesy doughy things are the perfect meal replacement for on the go gamers.', 10, tempImg)
  menuItem('Chicken Nuggets', 'From freezer to oven to you\'r plate, you\'ll get 8 perfectly breaded chicken nugget patties that just cant\'t be beat! Comes with a choice of dipping sauce.', 8, tempImg)
  menuItem('Fruits and Vegetables', 'Scary and foreign to many gamers, this plate of finely selected fruits and vegetables will aid in gaming ability. By helping one\'s eye sight and preventing scurvy! Comes with a glass of water... you should probably drink it.', 6, tempImg)
}