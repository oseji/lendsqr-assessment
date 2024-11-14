import { Link } from "react-router-dom";

import backArrow from "../assets/userDetails/arrow.svg";
import avatar from "../assets/userDetails/avatar.svg";
import filledStar from "../assets/userDetails/filledStar.svg";
import emptyStar from "../assets/userDetails/emptyStar.svg";

const UserDetails = () => {
  return (
    <div id="userDetails">
      <div>
        <img src={backArrow} alt="arrow" />
        <span style={{ marginLeft: "10px", color: "#545F7D" }}>
          Back to Users
        </span>
      </div>

      <div className="headingGroup">
        <h1>user details</h1>

        <div className="headingButtonGroup">
          <button style={{ borderColor: "#E4033B", color: "#E4033B" }}>
            blacklist user
          </button>

          <button style={{ borderColor: "#39CDCC", color: "#39CDCC" }}>
            activate user
          </button>
        </div>
      </div>

      <div className="topDetailsCard">
        <div className="topSection">
          <img src={avatar} alt="profile picture" />

          <div className="nameAndRegNumber">
            <h2>Grace Effiom</h2>
            <p>LSQFf587g90</p>
          </div>

          <div>
            <p>User’s Tier</p>
            <div className="starsGroup">
              <img src={filledStar} alt="star icon" />
              <img src={emptyStar} alt="star icon" />
              <img src={emptyStar} alt="star icon" />
            </div>
          </div>

          <div>
            <p>₦200,000.00</p>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>

        <ul className="bottomSection">
          <li>general details</li>
          <li>documents</li>
          <li>bank details</li>
          <li>loans</li>
          <li>savings</li>
          <li>apps and system</li>
        </ul>
      </div>

      <div className="bottomDetailsCard"></div>
    </div>
  );
};

export default UserDetails;
