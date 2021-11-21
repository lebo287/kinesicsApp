import Optioncard from './../components/Optioncard'
import learn from '../img/learn.svg'
import chat from '../img/chat.svg'
import add from '../img/add.svg'

const Home = () => {
    return (
        <div className="center-layout">
            <div className="auth-card animate__animated animate__fadeInDown">
                <div className="header">Welcome</div>
                <Optioncard image={add} backgroundColor="#f2711c" text="ADD WORD" />
                <Optioncard image={chat} backgroundColor="#fbbd08" text="CHAT" />
                <Optioncard image={learn} backgroundColor="#b5cc18" text="LEARN" />
                
            </div>
            
        </div>
    )
}

export default Home
