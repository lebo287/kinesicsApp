const Wordcard = ({ image, text }) => {
  return (
    <div>
      <img src={image} alt="sign_language_image" />
      <p className="legend">{text}</p>
    </div>
  );
};

export default Wordcard;
