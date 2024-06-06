
import './App.css';
import React from 'react';
 import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';

function App() {
  const [formData, setFormData] = React.useState(
    {
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "", 
    }
)
  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}
function handleSubmit(event) {
    event.preventDefault()
console.log(formData)
}
  const [show, setShow] = React.useState(false);
  
  const handleClose = () => setShow( false);
  const handleShow = () => setShow(true);
  return (
    
    <div className="">
      <div className='App'>

     <div className='left-section display-flex justify-content-center'>
        <h1 className=' note-text text-dark'>Notes</h1>
       <button  onClick={handleShow} className='add-button' title='add a note'><i className='mdi mdi-plus-thick fs-5'></i></button>
     </div>
     <div className='right-section'>
      <div className='preview'>
<h3 className='write'>Write</h3>
<h3 className='write'>Preview</h3>
      </div>
     </div>
      </div>
     <div className='note-add'>
      <i className=' icon mdi mdi-circle-outline'></i>
       <h5 className='form-data'>{formData.firstName}</h5>
       <h5 className='form-data'>{formData.lastName}</h5>
       <h5 className='form-data'>{formData.email}</h5>
       <h5 className='form-data'>{formData.comments}</h5>
      <i typeof='button' title='delete this note?' className='icon mdi mdi-close'></i>
     </div>
<div className='modal'>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title  className='top-line'>Create A Note.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <button className='submit' onSubmit={handleSubmit}>Submit</button>
        </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
  
</div>
    </div>
  );
}

export default App;
