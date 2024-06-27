
import './App.css';
import React from 'react';
 import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';
 import {nanoid} from "nanoid";
//  import Split from 'react-split';
 import Sidebar from "./Sidebar";
 import Editor from './Editor.js';
 

function App() {
//   const [formData, setFormData] = React.useState(
//     {
//         firstName: "", 
//         lastName: "", 
//         email: "", 
//         comments: "", 
//     }
// )
const [notes, setNotes] = React.useState(
   () => JSON.parse(localStorage.getItem("notes")) || []
)
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    React.useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

function createNewNote() {
  const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
  }
  setNotes(prevNotes => [newNote, ...prevNotes])
  setCurrentNoteId(newNote.id)
}
function updateNote(text) {
  setNotes(oldNotes => {
      const newArray = []
      for(let i = 0; i < oldNotes.length; i++) {
          const oldNote = oldNotes[i]
          if(oldNote.id === currentNoteId) {
              newArray.unshift({ ...oldNote, body: text })
          } else {
              newArray.push(oldNote)
          }
      }
      return newArray
  })
}
function deleteNote(event, noteId) {
  event.stopPropagation()
  setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
}

function findCurrentNote() {
  return notes.find(note => {
      return note.id === currentNoteId
  }) || notes[0]
}
//   function handleChange(event) {
//     const {name, value, type, checked} = event.target
//     setFormData(prevFormData => {
//         return {
//             ...prevFormData,
           
//         }
//     })
// }
// function handleSubmit(event) {
//     event.preventDefault()
// console.log(formData)
// }
  // const [show, setShow] = React.useState(false);
  
  // const handleClose = () => setShow( false);
  // const handleShow = () => setShow(true);
  return (
    <main>
        {
            notes.length > 0 
            ?
            <div 
                // sizes={[30, 70]} 
                // direction="horizontal" 
                // className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
                    />
                }
            </div>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    
//     <div className="">
//       <div className='App'>

//      <div className='left-section display-flex justify-content-center'>
//         <h1 className=' note-text text-dark'>Notes</h1>
//        <button  onClick={handleShow} className='add-button' title='add a note'><i className='mdi mdi-plus-thick fs-5'></i></button>
//      </div>
//      <div className='right-section'>
//       <div className='preview'>
// <h3 className='write'>Write</h3>
// <h3 className='write'>Preview</h3>
//       </div>
//      </div>
//       </div>
//      <div className='note-add'>
//       <i className=' icon mdi mdi-circle-outline'></i>
//        <h5 className='form-data'>{formData.firstName}</h5>
//        <h5 className='form-data'>{formData.lastName}</h5>
//        <h5 className='form-data'>{formData.email}</h5>
//        <h5 className='form-data'>{formData.comments}</h5>
//       <i typeof='button' title='delete this note?' className='icon mdi mdi-close'></i>
//      </div>
// <div className='modal'>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header >
//           <Modal.Title  className='top-line'>Create A Note.</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
//             <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 name="lastName"
//                 value={formData.lastName}
//             />
//             <input
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 name="email"
//                 value={formData.email}
//             />
//             <textarea 
//                 value={formData.comments}
//                 placeholder="Comments"
//                 onChange={handleChange}
//                 name="comments"
//             />
//             <button className='submit' onSubmit={handleSubmit}>Submit</button>
//         </form>
//         </Modal.Body>
//         <Modal.Footer>
//           {/* <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button> */}
//         </Modal.Footer>
//       </Modal>
  
// </div>
//     </div>
  );
}

export default App;
