import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import Detect from '../components/Detect'

function ModalExampleBasic() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='large'
      
      trigger={
      <Icon 
        name="video"
        color="blue"
        style = {{
            paddingLeft:"3%",
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
           
          }}
      
      />}

      
    >
      <Header>
        <Detect/>
     
      </Header>
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleBasic