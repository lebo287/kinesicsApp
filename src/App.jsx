import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './components/Layout'



const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="register" element={<Register />} />
    </Routes>
    </Layout>
  )
}

export default App

