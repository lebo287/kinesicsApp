import Learncarousel from "../components/Learncarousel"
import Backbutton from '../components/Backbutton';
import Layout from '../components/Layout';




const Learn = () => {
  return (
    <Layout>
      <div className="center-layout">
        <div className="auth-card animate__animated animate__fadeInUp animate__faster">
          <div className="header">Learn</div>
          <Learncarousel />
        </div>
      </div>
   
        <Backbutton />
    </Layout>
  );
};

export default Learn;
