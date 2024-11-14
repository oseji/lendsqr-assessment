import { useState, useRef, useEffect } from "react";

import users from "../assets/dashboard content/users.svg";
import activeUsers from "../assets/dashboard content/active users.svg";
import usersWithLoans from "../assets/dashboard content/users with loans.svg";
import usersWithSavings from "../assets/dashboard content/users with savings.svg";
import filterIcon from "../assets/dashboard content/filter-results-button.svg";
import optionIcon from "../assets/dashboard content/options.svg";
import eyeIcon from "../assets/dashboard content/detailsIcon.svg";
import blackListFriend from "../assets/dashboard content/np_delete-friend_3248001_000000 1.svg";
import activateFriend from "../assets/dashboard content/activatefriend.svg";

const DashboardContent = () => {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [optionsModalOpen, setOptionsModalOpen] = useState(false);

  const filterModalRef = useRef<HTMLDivElement>(null);
  const optionsModalRef = useRef<HTMLTableDataCellElement>(null);

  // toggling filter modal
  const toggleFilterModal = () => {
    setFilterOpen(!filterOpen);

    if (filterOpen) {
      filterModalRef.current?.classList.remove("filterModalHidden");
    } else {
      filterModalRef.current?.classList.add("filterModalHidden");
    }
  };

  // toggling options modal
  useEffect(() => {
    if (optionsModalOpen) {
      optionsModalRef.current?.classList.remove("optionsModalHidden");
    } else {
      optionsModalRef.current?.classList.add("optionsModalHidden");
    }

    console.log(optionsModalOpen);
  }, [optionsModalOpen]);

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
              <img
                src={filterIcon}
                alt="filter icon"
                onClick={toggleFilterModal}
              />
            </th>
            <th>
              <span>username</span>
              <img
                src={filterIcon}
                alt="filter icon"
                onClick={toggleFilterModal}
              />
            </th>
            <th>
              <span>email</span>
              <img
                src={filterIcon}
                alt="filter icon"
                onClick={toggleFilterModal}
              />
            </th>
            <th>
              <span>phone number</span>
              <img
                src={filterIcon}
                alt="filter icon"
                onClick={toggleFilterModal}
              />
            </th>
            <th>
              <span>date joined</span>
              <img
                src={filterIcon}
                alt="filter icon"
                onClick={toggleFilterModal}
              />
            </th>
            <th>
              <span>status</span>
              <img
                src={filterIcon}
                alt="filter icon"
                onClick={toggleFilterModal}
              />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td
              className="tableItem"
              onClick={() => setOptionsModalOpen(false)}
            >
              lendsqr
            </td>
            <td
              className="tableItem"
              onClick={() => setOptionsModalOpen(false)}
            >
              adedeji
            </td>
            <td
              className="tableItem"
              onClick={() => setOptionsModalOpen(false)}
            >
              adedeji@lendsqr.com
            </td>
            <td
              className="tableItem"
              onClick={() => setOptionsModalOpen(false)}
            >
              08078903721
            </td>
            <td
              className="tableItem"
              onClick={() => setOptionsModalOpen(false)}
            >
              May 15, 2020 10:00 AM
            </td>
            <td className="tableItem">
              <span>Inactive</span>
              <img
                src={optionIcon}
                alt="options icon"
                onClick={() => {
                  setOptionsModalOpen(true);
                  console.log("clicked");
                }}
              />
            </td>

            <td className="optionModal" ref={optionsModalRef}>
              <div className="optionModalRow">
                <img src={eyeIcon} alt="details icon" />
                <span>view details</span>
              </div>

              <div className="optionModalRow">
                <img src={blackListFriend} alt="blacklist icon" />
                <span>blacklist friend</span>
              </div>

              <div className="optionModalRow">
                <img src={activateFriend} alt="activate icon" />
                <span>activate user</span>
              </div>
            </td>
          </tr>
        </tbody>

        <div className="filterModal filterModalHidden" ref={filterModalRef}>
          <div className="filterRow">
            <label htmlFor="organization">organization</label>
            <select name="organization" id="organization">
              <option value="">Select</option>
            </select>
          </div>

          <div className="filterRow">
            <label htmlFor="filterUsername">username</label>
            <input
              type="text"
              id="filterUsername"
              name="username"
              placeholder="User"
            />
          </div>

          <div className="filterRow">
            <label htmlFor="filterEmail">email</label>
            <input
              type="email"
              inputMode="email"
              name="filterEmail"
              id="filterEmail"
              placeholder="Email"
            />
          </div>

          <div className="filterRow">
            <label htmlFor="filterDate">date</label>
            <input type="date" name="filterDate" id="filterDate" />
          </div>

          <div className="filterRow">
            <label htmlFor="filterNumber">phone number</label>
            <input
              type="number"
              inputMode="numeric"
              name="filterNumber"
              id="filterNumber"
              placeholder="Phone Number"
            />
          </div>

          <div className="filterRow">
            <label htmlFor="filterStatus">status</label>
            <select name="filterStatus" id="filterStatus">
              <option value="">Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Blacklisted">Blacklisted</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <div className="filterButtonsGroup">
            <button
              style={{
                border: "1px solid #545F7D",
                color: "#545F7D",
                backgroundColor: "white",
              }}
            >
              Reset
            </button>
            <button
              style={{
                backgroundColor: "#39CDCC",
                color: "white",
                border: "none",
              }}
            >
              Filter
            </button>
          </div>
        </div>
      </table>
    </div>
  );
};

export default DashboardContent;
