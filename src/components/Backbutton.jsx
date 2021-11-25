import { Icon } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"

const Backbutton = () => {
    const navigate = useNavigate();
  return (
    <button className="backbutton animate__animated animate__pulse animate__slower animate__infinite" onClick={() => navigate(-1)}>
      <Icon name="arrow left" />
    </button>
  );
};

export default Backbutton;
