import './App.css';
import clicsLogo from './Assets/images/wanda.jpg'
import Button from './components/button';
import ShowCounter from './components/ShowCounter';
import { useState } from 'react'; //Hook useState

function App() {

  //Hooks
  const [numClic, setNumClic] = useState(0);

  const makeClic = () => {
    setNumClic (numClic + 1);
  };

  const restarCounter = () =>{
    setNumClic (0);
  };
  
  return (
    <div className="App">
      <div className='logo-container'>
        <img className='logo' 
        src={clicsLogo}
        alt='logo counter'/>
      </div>

      <div className='container-main'>
      
        <ShowCounter
        numClic={numClic} />

        <Button 
        text = 'Clic'
        isClicButton ={true}
        manageClic={makeClic} />

        <Button 
        text ='Restart'
        isClicButton={false} 
        manageClic={restarCounter} />
      </div>
    </div>
  );
}

export default App;
