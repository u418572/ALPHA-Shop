import MainProgress from 'components/progress/MainProgress';
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
            <MainProgress />
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
