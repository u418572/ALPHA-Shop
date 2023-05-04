// import logo from './logo.svg';
import Progress1 from './components/progress/Progress1'
import Progress2 from './components/progress/Progress2'
import Progress3 from './components/progress/Progress3'
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
            <Progress1 />
            <Progress2 />
            <Progress3 />
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
