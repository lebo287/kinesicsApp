import Learncarousel from "../components/Learncarousel"
import Backbutton from '../components/Backbutton'



const Learn = () => {
  return (
    <>
      <div className="center-layout">
        <div className="auth-card animate__animated animate__fadeInUp animate__faster">
          <div className="header">Learn</div>
          <Learncarousel />
        </div>
      </div>
        <Backbutton />
    </>
  );
};

export default Learn;
