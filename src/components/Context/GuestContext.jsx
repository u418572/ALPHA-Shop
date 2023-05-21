import {createContext, useState} from 'react'
// import {useContext} from 'react'
const GuestInfo = {
  name:'',
  number: '',
  expired:'',
  ccv:''
}

export const GuestContext = createContext(GuestInfo)

// export const BaseContext = () => {
//   const [guest, setGuest] = useState({})
 
//   }
