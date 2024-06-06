import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
     <div className='left-section display-flex justify-content-center'>
        <h1 className=' note-text text-dark'>Notes</h1>
       <button className='add-button' title='add a note'><i className='mdi mdi-plus-thick fs-5'></i></button>
     </div>
     <div className='right-section'>
      <div className='preview'>
<h3 className='write'>Write</h3>
<h3 className='write'>Preview</h3>
      </div>
     </div>
  
    </div>
  );
}

export default App;
