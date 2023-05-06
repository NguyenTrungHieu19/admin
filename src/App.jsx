import { useState } from 'react'
import { ListData } from './components/listData'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <button  >create new account</button>
      <table>
        <tr>
            <td>id</td>
            <td>email</td>
            <td>username</td>
            <td>fullname</td>
            <td>department</td>
            <td>position</td>
            <td>create date</td>
            <td>edit</td>
            <td>delete</td>
        </tr>      
           <ListData/>  
      </table>
      <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
    
    </>
  )
}

export default App
