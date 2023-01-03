import { heading, clearDOM, contactInfoBlock } from "./components"
import controllerImg from './imgs/controller.svg'
import skarbrandImg from './imgs/skarbrand.png'
import cortanaImg from './imgs/cortana.png'
import yoshiImg from './imgs/yoshi.png'
import gordonFreemanImg from './imgs/gordon-freeman.png'

export const contactPage = () => {

  clearDOM()

  heading('Contact Us', controllerImg)
  contactInfoBlock('Skarbrand', 'Chef', '(123) 444-5554', 'ExiledOne@RealEmail.com', skarbrandImg)
  contactInfoBlock('Cortana', 'Manager', '(123) 444-5555', 'MasterAI@RealEmail.com', cortanaImg)
  contactInfoBlock('Yoshi', 'Waiter', '(123) 444-5556', 'GreenDinosaur@RealEmail.com', yoshiImg)
  contactInfoBlock('Gordon Freeman', 'Maintenance', '(123) 444-5557', 'BlackMesaScientist@RealEmail.com', gordonFreemanImg)
}