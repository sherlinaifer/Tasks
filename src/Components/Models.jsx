import "./Models.css";
import "../index.css";
import c40 from '../img/c40.jpg'
import { RiArrowRightSLine } from "react-icons/ri";
const Models = () => {
  return (
    <div className="model-container">
      <h1>All Models</h1>
      <div className="total">
        <p>All(1)</p>
        <p>SUV(1)</p>
      </div>
      <div className="description">
       <p> SUV <br />
        <b>C40 Recharge</b> pure electric <br />
       Purchase from ₹62,95,000</p><br />
        <div class="card-item">
          <div class="image">
            <img src={c40} alt="" />
          </div>
        </div>
        <button>
          <b>AVAILABLE ONLINE</b>
        </button>
        <ul>
          <li>
            Learn <RiArrowRightSLine />
          </li>
          <li>
            Order Online <RiArrowRightSLine />
          </li>
        </ul>
      </div>
      <div className="compare-button">
        Compare models
      </div>
    </div>
  );
};
export default Models;
