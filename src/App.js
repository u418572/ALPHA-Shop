// import logo from './logo.svg';
import Progress from './components/progress/Progress'
import Step1 from './components/step/Step1'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="primarySection">
          
          <Progress />
          <Step1 />
        </div>
       
        <div className="secondarySection"></div>
       
      </div>
    
     
    </div>
  );
}

export default App;
