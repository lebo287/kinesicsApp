/********************************************** 
// ⚠️⚠️⚠️ to use the Alert ⚠️⚠️⚠️
// import it then create a default state for it

   const [alertProps, setAlertProps] = useState({isOpen: false, header: "", message: "", isError: false});

// use it by simply rendering it and passing the state

    <Alert alertProps={alertProps} handleCloseAlert={() => setAlertProps({isOpen: false})} />
    
 ************************************************/

import { useState, useEffect } from "react"
import { Button, Header, Icon, Modal } from "semantic-ui-react"

const Alert = ({ alertProps, handleCloseAlert }) => {
  const { isOpen, header, message, isError } = alertProps
  const myIcon = isError ? "warning" : "check";

  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <Modal
      basic
      onClose={() => {handleCloseAlert()}}
      onOpen={() => setOpen(true)}
      open={open}
      size="large"
    >
      <Header icon>
        <Icon name={myIcon} />
        {header}
      </Header>
      <Modal.Content>
        <p style={{ textAlign: "center" }}>{message}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color={isError ? "red" : "blue"}
          inverted
          onClick={() => {
            handleCloseAlert();
          }}
        >
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Alert;




