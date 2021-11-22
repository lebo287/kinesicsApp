import { useState, useEffect } from "react"
import { Button, Header, Image, Modal } from "semantic-ui-react"

const Addword = ({isAddwordOpen, handleModal}) => {
  const [open, setOpen] = useState(isAddwordOpen);
  
  useEffect(() => {
    setOpen(isAddwordOpen)
  }, [isAddwordOpen])

  return (
    <Modal
      onClose={() => handleModal()}
      onOpen={() => setOpen(true)}
      open={open}
      className="animate__animated animate__fadeInUp animate__faster"
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src="/images/avatar/large/rachel.png" wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => handleModal()}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() => handleModal()}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default Addword
