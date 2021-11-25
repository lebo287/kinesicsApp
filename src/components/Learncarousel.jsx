import { useState, useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Wordcard from "../components/Wordcard";
import Good from '../img/good.gif';
import Work from '../img/work.gif';
import Cardboard from '../img/cardboard.gif';

const Learncarousel = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords([
      {
        image:Good,
        text: "i am good",
      },
      {
        image:Work,
        text: "i am going back to work have a great day",
      },
      {
        image:Cardboard,
        text: "yes check in the cardboard",
      },
      {
        image: "https://i.gifer.com/8ylT.gif",
        text: "Can't hear you",
      },
    
    ]);
  }, []);

  return (
    <Carousel
      autoPlay={false}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      useKeyboardArrows={true}
    >
      {words.map((word, index) => (
        <Wordcard key={index} image={word.image} text={word.text} />
      ))}
    </Carousel>
  );
};

export default Learncarousel;
