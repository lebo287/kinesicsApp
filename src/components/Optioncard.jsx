import { useNavigate } from "react-router-dom"

const Optioncard = (props) => {
  const { image, backgroundColor, text, route, openModal } = props
  const navigate = useNavigate()

  const handleClick = () => {
    if (!route) {
      openModal()
      return;
    }
    navigate(`/${route}`)
  };

  return (
    <div
      className="option-card"
      style={{ backgroundColor }}
      onClick={handleClick}
    >
      <img src={image} alt="React Logo" />
      <div className="subheader">{text}</div>
    </div>
  );
};

export default Optioncard;
