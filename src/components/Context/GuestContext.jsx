import {createContext} from 'react'
 
const GuestInfo =[ {
  id: '0',
  name:'',
  number: '',
  expired:'',
  cvc:'',
}]

export const GuestContext = createContext(GuestInfo)

 