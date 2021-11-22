import {useState} from "react"
import Optioncard from "./../components/Optioncard"
import Addword from "./../components/Addword"
import learn from "../img/learn.svg"
import chat from "../img/chat.svg"
import add from "../img/add.svg"

const Home = () => {

    const [isAddwordOpen, setIsAddwordOpen] = useState(false)

    // card options
    // @image: render specific SVG image
    // @backgroundColor: CSS color
    // @route: open specific route, if left empty, handleOpenModal will be triggered
  const cards = [
    { image: add, backgroundColor: "#f2711c", text: "ADD WORD", route: "" },
    { image: chat, backgroundColor: "#fbbd08", text: "CHAT", route: "chat" },
    { image: learn, backgroundColor: "#b5cc18", text: "LEARN", route: "learn" },
  ];

  // open || close Addword modal
  const handleModal = () => {
      setIsAddwordOpen(!isAddwordOpen);
  };

  return (
      <>
      <Addword isAddwordOpen={isAddwordOpen} handleModal={handleModal} />
    <div className="center-layout">
      <div className="auth-card animate__animated animate__fadeInUp animate__faster">
        <div className="header">Welcome</div>

        {cards.map((card, index) => (
          <Optioncard
            key={index}
            image={card.image}
            backgroundColor={card.backgroundColor}
            text={card.text}
            route={card.route}
            openModal={handleModal}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
