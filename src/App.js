import Imformation from 'components/progress/Imformation';
import Cart from 'components/cart/Cart';
import './App.css';

function App() {
   return (
    <div className="App">
       <div >
        <div className='mainTitle'>結帳
        </div>
        <div className="main-container"  >
          <div className="primarySection">
            <Imformation />
          </div>
          <div className="secondarySection">
            <Cart />
          </div>
        </div>
      </div>
     </div>
  );
}

export default App;
