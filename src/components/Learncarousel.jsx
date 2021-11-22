import { useState, useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Wordcard from "../components/Wordcard"

const Learncarousel = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords([
      {
        image:
          "https://media.wired.com/photos/6081f4280c9b5877078878e2/master/w_2560%2Cc_limit/business_plaintext_apple_1313768378.jpg",
        text: "Apple 1",
      },
      {
        image:
          "https://media.wired.com/photos/6081f4280c9b5877078878e2/master/w_2560%2Cc_limit/business_plaintext_apple_1313768378.jpg",
        text: "Apple 2",
      },
      {
        image:
          "https://media.wired.com/photos/6081f4280c9b5877078878e2/master/w_2560%2Cc_limit/business_plaintext_apple_1313768378.jpg",
        text: "Apple 3",
      },
      {
        image:
          "https://media.wired.com/photos/6081f4280c9b5877078878e2/master/w_2560%2Cc_limit/business_plaintext_apple_1313768378.jpg",
        text: "Apple 4",
      },
      {
        image:
          "https://media.wired.com/photos/6081f4280c9b5877078878e2/master/w_2560%2Cc_limit/business_plaintext_apple_1313768378.jpg",
        text: "Apple 5",
      },
      {
        image:
          "https://media.wired.com/photos/6081f4280c9b5877078878e2/master/w_2560%2Cc_limit/business_plaintext_apple_1313768378.jpg",
        text: "Apple 6",
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
