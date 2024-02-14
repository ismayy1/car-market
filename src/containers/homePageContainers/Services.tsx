import bottom from "../../assets/bottom.png";
import buyPng from "../../assets/buy.png";
import sellPng from "../../assets/sell.png";

import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img
        id="services"
        width={1436}
        height={109.35}
        alt="Services section staring image"
        src={bottom}
        className="grid-img"
      />
      <section className="services">
        <div className="heading">
          <h2>What we actually do</h2>
          <p>
          As a peer-to-peer commerce hub, our platform enables individuals to engage in direct exchanges of cars and services. 
          Offering an easy-to-navigate interface for item listing and exploration, 
          our website also provides communication tools to facilitate seamless interactions between buyers and sellers.
          </p>
        </div>
        <div className="servicesCards cards">
          <div onClick={() => navigate("/buy")} className="card">
            <div className="light"></div>
            <img className="imgBuy" src={buyPng} alt="buying-icon" />
            <h3>Buy a new Car</h3>
          </div>
          <div className="card" onClick={() => navigate("/sell")}>
            <div className="light"></div>
            <img src={sellPng} alt="selling-icon" />
            <h3>Sell your Car</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;