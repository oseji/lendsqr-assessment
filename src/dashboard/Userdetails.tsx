import { Link } from "react-router-dom";

import backArrow from "../assets/userDetails/arrow.svg";
import avatar from "../assets/userDetails/avatar.svg";
import filledStar from "../assets/userDetails/filledStar.svg";
import emptyStar from "../assets/userDetails/emptyStar.svg";

const UserDetails = () => {
  return (
    <div id="userDetails">
      <div>
        <Link to={"/DashboardContent"}>
          <img src={backArrow} alt="arrow" style={{ cursor: "pointer" }} />
        </Link>

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

          <div className="subGroup">
            <div className="nameAndRegNumber">
              <h2>Grace Effiom</h2>
              <p>LSQFf587g90</p>
            </div>

            <div className="tierGroup">
              <p style={{ color: "#545F7D" }}>User’s Tier</p>
              <div className="starsGroup">
                <img src={filledStar} alt="star icon" />
                <img src={emptyStar} alt="star icon" />
                <img src={emptyStar} alt="star icon" />
              </div>
            </div>

            <div>
              <p className="balance">₦200,000.00</p>
              <p className="bankName">9912345678/Providus Bank</p>
            </div>
          </div>
        </div>

        <ul className="bottomSection">
          <li className="activeTab">general details</li>
          <li>documents</li>
          <li>bank details</li>
          <li>loans</li>
          <li>savings</li>
          <li>apps and system</li>
        </ul>
      </div>

      <div className="bottomDetailsCard">
        <section>
          <h3>personal information</h3>

          <div className="bottomDetailsRow">
            <div className="info">
              <label>full name</label>
              <p>Grace Effiom</p>
            </div>
            <div className="info">
              <label>phone number</label>
              <p>07060780922</p>
            </div>
            <div className="info">
              <label>email address</label>
              <span>grace@gmail.com</span>
            </div>
            <div className="info">
              <label>bvn</label>
              <p>07060780922</p>
            </div>
            <div className="info">
              <label>marital status</label>
              <p>Single</p>
            </div>
            <div className="info">
              <label>children</label>
              <p>None</p>
            </div>
            <div className="info">
              <label>type of residence</label>
              <p>Parent’s Apartment</p>
            </div>
          </div>
        </section>

        <section>
          <h3>Education and Employment</h3>

          <div className="bottomDetailsRow">
            <div className="info">
              <label>level of education</label>
              <p>b.Sc</p>
            </div>
            <div className="info">
              <label>employment status</label>
              <p>employed</p>
            </div>
            <div className="info">
              <label>sector of employment</label>
              <p>fintech</p>
            </div>
            <div className="info">
              <label>Duration of employment</label>
              <p>2 years</p>
            </div>
            <div className="info">
              <label>office email</label>
              <span>grace@lendsqr.com</span>
            </div>
            <div className="info">
              <label>Monthly income</label>
              <p>₦200,000.00- ₦400,000.00</p>
            </div>
            <div className="info">
              <label>loan repayment</label>
              <p>40,000</p>
            </div>
          </div>
        </section>

        <section>
          <h3>socials</h3>

          <div className="bottomDetailsRow">
            <div className="info">
              <label>twitter</label>
              <span>@grace_effiom</span>
            </div>
            <div className="info">
              <label>facebook</label>
              <span>Grace Effiom</span>
            </div>
            <div className="info">
              <label>instagram</label>
              <span>@grace_effiom</span>
            </div>
          </div>
        </section>

        <section>
          <h3>guarantor</h3>

          <div className="bottomDetailsRow">
            <div className="info">
              <label>fullname</label>
              <p>Debby Ogana</p>
            </div>
            <div className="info">
              <label>phone number</label>
              <p>07060780922</p>
            </div>
            <div className="info">
              <label>email address</label>
              <span>debby@gmail.com</span>
            </div>
            <div className="info">
              <label>relationship</label>
              <p>sister</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDetails;
