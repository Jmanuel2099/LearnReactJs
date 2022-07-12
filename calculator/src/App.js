import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'


function App() {
  const [input, SetInput] = useState('');

  const AddInput= value =>{
    SetInput(input + value);
  };

  const CalculateResult = () => {
    if (input) {
      SetInput(evaluate(input));  
    }else{
      alert('Please, entry data')
    }
  }; 

  return (
    <div className="App">
      <div className='main-container'>
        <Display  input={ input }/>
        <div className='row'>
          <Button click={AddInput}>1</Button>
          <Button click={AddInput}>2</Button>
          <Button click={AddInput}>3</Button>
          <Button click={AddInput}>+</Button>
        </div>
        <div className='row'>
          <Button click={AddInput}>4</Button>
          <Button click={AddInput}>5</Button>
          <Button click={AddInput}>6</Button>
          <Button click={AddInput}>-</Button>
        </div>
        <div className='row'>
          <Button click={AddInput}>7</Button>
          <Button click={AddInput}>8</Button>
          <Button click={AddInput}>9</Button>
          <Button click={AddInput}>*</Button>
        </div>
        <div className='row'>
          <Button click={CalculateResult}>=</Button>
          <Button click={AddInput}>0</Button>
          <Button click={AddInput}>.</Button>
          <Button click={AddInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear 
          clickClear={ ()=> SetInput('') }> 
          Clear 
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
