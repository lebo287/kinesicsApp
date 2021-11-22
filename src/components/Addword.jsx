import { useState, useEffect } from "react"
import { Header, Image, Modal } from "semantic-ui-react"
import add from "../img/add.svg"

const Addword = ({isAddwordOpen, handleModal}) => {
  const [open, setOpen] = useState(isAddwordOpen);
  
  useEffect(() => {
    setOpen(isAddwordOpen)
  }, [isAddwordOpen])

  return (
    <Modal
      size="large"
      onClose={() => handleModal()}
      onOpen={() => setOpen(true)}
      open={open}
      className="animate__animated animate__fadeInDown"
      style={{textAlign: "center"}}
    >
        <br /><br />
      <Modal.Content image >
        <Image size="medium" style={{width: "60px", textAlign: "center"}} src={add} wrapped />
        <br />
        <Modal.Description>
          <Header color="blue">Add Word</Header>
          <p>Contribute in kinesics dictionary by adding a Word and a GIF image</p>
          <input type="text" placeholder="Provide a word" className="modalInput" />
          <input type="file" className="modalInput" />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <button className="btn"  style={{margin: "0 .5rem"}} >Clear</button>
        <button className="btn btn-primary" onClick={() => handleModal()}>Submit</button>

      </Modal.Actions>
      <br />
    </Modal>
  );
};

export default Addword
