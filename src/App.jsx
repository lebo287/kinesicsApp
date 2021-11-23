import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Learn from "./pages/Learn";
import Detect from "./components/Detect";

const App = () => {
  return (
    <>
 
       

   
      <Routes>
      
        <Route exact path="/" element={<Login />} />
         <Route path="detect" element={<Detect />} />
        <Route path="home" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="register" element={<Register />} />
        <Route path="learn" element={<Learn />} />
        
      </Routes>
   

    
    </>
  );
};

export default App
