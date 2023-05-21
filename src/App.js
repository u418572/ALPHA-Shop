
import MainApp from 'components/MainApp';
// import {useContext} from 'react'
// import { CartContext } from 'components/cart/CartContext';
import './App.css';

function App() {
  return (
    <div className="App">
       <div >
        <div className='mainTitle'>結帳
        </div>
        <div className="main-container"  >
          <MainApp />
         </div>
      </div>
    </div>
  );
}

export default App;
