import { heading, clearDOM, contactInfoBlock } from "./components"
import tempImg from './imgs/food-template.png'

export const contactPage = () => {

  clearDOM()

  heading('Contact Us')
  contactInfoBlock('Skarbrand', 'Chef', '(123) 444-5554', 'ExiledOne@RealEmail.com', tempImg)
  contactInfoBlock('Cortana', 'Manager', '(123) 444-5555', 'MasterAI@RealEmail.com', tempImg)
  contactInfoBlock('Yoshi', 'Waiter', '(123) 444-5556', 'GreenDinosaur@RealEmail.com', tempImg)
  contactInfoBlock('Gordon Freeman', 'Maintenance', '(123) 444-5557', 'BlackMesaScientist@RealEmail.com', tempImg)
}