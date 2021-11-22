import {useState} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const Alert = () => {

    const [open, setOpen] = useState(true)


    return (
        <Modal
          basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size='large'
        >
          <Header icon>
            <Icon name='archive' />
            Archive Old Messages
          </Header>
          <Modal.Content>
            <p style={{textAlign:'center'}}>
              Your inbox is getting full, would you like us to enable automatic
              archiving of old messages?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='red' inverted onClick={() => setOpen(false)}>
              <Icon name='remove' /> No
            </Button>
            <Button color='blue' inverted onClick={() => {setOpen(false); }}>
              <Icon name='checkmark' /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      )
}

Alert.defaultProps = {
    isOpen: false
}

export default Alert

