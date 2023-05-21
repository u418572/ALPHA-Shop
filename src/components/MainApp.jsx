import Cart from 'components/cart/Cart'
import MainProgress from 'components/progress/MainProgress'
import { Production } from 'components/cart/Production'
import { GuestContext } from 'components/Context/GuestContext'
import { CartContext } from 'components/Context/CartContext'
import { useContext, useState } from 'react'

function MainApp() {
  const [initData, setInitData] = useState(Production)
  let person= useContext(GuestContext)
  const [guest, setGuest]= useState(person)
 
 
  let subTotal = 0;

  //用遍歷的方式將價錢加總起來
  initData.forEach(item => subTotal += item.price * item.quantity)
   console.log('person:',guest)
  return (
    <>
      <GuestContext.Provider value={{ guest,setGuest}}>
        <CartContext.Provider value={{ initData, setInitData }}>
          <MainProgress />
          <Cart subTotal={subTotal} />
        </CartContext.Provider>
      </GuestContext.Provider>







    </>
  )
}

export default MainApp