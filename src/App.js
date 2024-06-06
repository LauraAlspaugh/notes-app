
import './App.css';
import React from 'react';
 import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';






function App() {
  const [show, setShow] = React.useState(false);
  
  const handleClose = () => setShow( false);
  const handleShow = () => setShow(true);
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

  <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
    </div>
  );
}

export default App;
