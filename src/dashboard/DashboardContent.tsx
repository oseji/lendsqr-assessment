import users from "../assets/dashboard content/users.svg";
import activeUsers from "../assets/dashboard content/active users.svg";
import usersWithLoans from "../assets/dashboard content/users with loans.svg";
import usersWithSavings from "../assets/dashboard content/users with savings.svg";
import filterIcon from "../assets/dashboard content/filter-results-button.svg";
import optionIcon from "../assets/dashboard content/options.svg";

const DashboardContent = () => {
  return (
    <div id="dashboardContent">
      <h1 style={{ color: "#213F7D" }}>Users</h1>

      <div className="userOverviewCards">
        <div className="userCards">
          <img src={users} alt="users icon" />
          <p className="cardTitle">users</p>
          <p className="cardNum">2,453</p>
        </div>
        <div className="userCards">
          <img src={activeUsers} alt="active users icon" />
          <p className="cardTitle">active users</p>
          <p className="cardNum">2,453</p>
        </div>
        <div className="userCards">
          <img src={usersWithLoans} alt="users with loans icon" />
          <p className="cardTitle">users with loans</p>
          <p className="cardNum">12,453</p>
        </div>
        <div className="userCards">
          <img src={usersWithSavings} alt="users with savings icon" />
          <p className="cardTitle">users with savings</p>
          <p className="cardNum">102,453</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              <span>organization</span>
              <img src={filterIcon} alt="filter icon" />
            </th>
            <th>
              <span>username</span>
              <img src={filterIcon} alt="filter icon" />
            </th>
            <th>
              <span>email</span>
              <img src={filterIcon} alt="filter icon" />
            </th>
            <th>
              <span>phone number</span>
              <img src={filterIcon} alt="filter icon" />
            </th>
            <th>
              <span>date joined</span>
              <img src={filterIcon} alt="filter icon" />
            </th>
            <th>
              <span>status</span>
              <img src={filterIcon} alt="filter icon" />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>lendsqr</td>
            <td>adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span>Inactive</span>
              <img src={optionIcon} alt="options icon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardContent;
