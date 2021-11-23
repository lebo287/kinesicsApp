import { useState, useEffect } from "react"
import { Header, Image, Modal } from "semantic-ui-react"
import add from "../img/add.svg"
import axios from "axios";
import Alert from "../components/Alert";

const Addword = ({isAddwordOpen, handleModal}) => {
  const [open, setOpen] = useState(isAddwordOpen);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const [word, setWord] = useState();


  const [alertProps, setAlertProps] = useState({
    isOpen: false,
    header: "",
    message: "",
    isError: false,
  });

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    event.target.files[0] && setIsFilePicked(true);
  };

  
  useEffect(() => {
    setOpen(isAddwordOpen)
  }, [isAddwordOpen])


  const handleSubmission = (e) => {
    e.preventDefault();

    console.log(e)
    
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);
    formData.append("word", word);
    formData.append("approve", false);


    console.log(formData)

    axios.post("https://sign-translate.herokuapp.com/word/upload",formData).then(respond => {
        console.log(respond);
       
        setAlertProps({
          isOpen: true,
          header: "Error",
          message: "Email and Password are required",
          isError: true,
        });
        
        setInterval(() => {
          handleModal();
        }, 3000);

    }).catch(err => {
        console.log(err);
   
     
    })
}

  return (
  <>
     <Alert
        alertProps={alertProps}
        handleCloseAlert={() => setAlertProps({ isOpen: false })}
      />
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
          <input type="text" placeholder="Provide a word" className="modalInput" onChange={(e) => setWord(e.target.value)} value={word} />
          <input type="file" className="modalInput"  onChange={changeHandler}  />
        </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <button className="btn"  style={{margin: "0 .5rem"}} >Clear</button>
          <button className="btn btn-primary" onClick={handleSubmission} >Submit</button>
        </Modal.Actions>
        <br />
      </Modal>
    </>
  );
};

export default Addword
