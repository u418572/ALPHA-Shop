// import logo from './logo.svg';
import Progress from './components/progress/Progress'
import Step from './components/step/Step'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="primarySection">
           <Progress />
           <Step />
        </div>
       
        <div className="secondarySection"></div>
       
      </div>
    
     
    </div>
  );
}

export default App;
