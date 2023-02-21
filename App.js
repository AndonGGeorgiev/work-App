

import AddWork from './addWork';
import './App.css';

function App() {

  function handleSubmit(event){
    event.preventDefault()

}
  return (
    <header>
      <div className='buttons'>
        <button onClick={AddWork}>Add</button>
        <button>Find</button>
        <button>Extra time</button>
      </div>
      <div className='content'>
        <div className='moto'>
          <h2 className='text'>Stay organized. Dont give them a reason</h2>
          <img src='./organized.png' alt='picture'></img>
        </div>
        <div className='info'>
          <h2>Andon </h2>
          <h2>Georgiev</h2>
          <h2>Inspector</h2>
          <h2>Teritorial police</h2>
        </div>
      </div>
    </header>
  );
}

export default App;
