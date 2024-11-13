import downArrow from "../assets/sidebar/Vector.svg";
import briefcase from "../assets/sidebar/briefcase.svg";
import home from "../assets/sidebar/home 1.svg";
import userFriends from "../assets/sidebar/user-friends 1.svg";
import loans from "../assets/sidebar/sack 1.svg";
import handshake from "../assets/sidebar/handshake-regular 1.svg";
import savings from "../assets/sidebar/piggy-bank 1.svg";
import loanRequest from "../assets/sidebar/loan request.svg";
import whitelist from "../assets/sidebar/whitelist.png";
import karma from "../assets/sidebar/karma.svg";
import savingProducts from "../assets/sidebar/savings product.png";
import feesAndCharges from "../assets/sidebar/coins-solid 1.svg";
import transactions from "../assets/sidebar/transactions.svg";
import services from "../assets/sidebar/services.svg";
import serviceAccount from "../assets/sidebar/service account.svg";
import settlement from "../assets/sidebar/scroll 1.svg";
import reports from "../assets/sidebar/chart-bar 2.svg";
import preferences from "../assets/sidebar/preferences.svg";
import feesAndPercentage from "../assets/sidebar/badge-percent 1.svg";
import auditLogs from "../assets/sidebar/clipboard-list 1.svg";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div>
        <div className="sidebarItem" style={{ marginBottom: "30px" }}>
          <img src={briefcase} alt="briefcase icon" />

          <span>Switch Organization</span>

          <img src={downArrow} alt="down arrow icon" />
        </div>

        <div className="sidebarItem">
          <img src={home} alt="home icon" />

          <span>dashboard</span>
        </div>
      </div>

      <div className="sidebarItemGroup">
        <h1>CUSTOMERS</h1>

        <div className="sidebarItem sidebarItemActive">
          <img src={userFriends} alt="users icon" />

          <span>users</span>
        </div>
        <div className="sidebarItem">
          <img src={userFriends} alt="users icon" />

          <span>guarantors</span>
        </div>
        <div className="sidebarItem">
          <img src={loans} alt="loans icon" />

          <span>loans</span>
        </div>
        <div className="sidebarItem">
          <img src={handshake} alt="handshake icon" />

          <span>decision models</span>
        </div>
        <div className="sidebarItem">
          <img src={savings} alt="savings icon" />

          <span>savings</span>
        </div>
        <div className="sidebarItem">
          <img src={loanRequest} alt="load requests icon" />

          <span>loan requests</span>
        </div>
        <div className="sidebarItem">
          <img src={whitelist} alt="whitelist icon" />

          <span>whitelist</span>
        </div>
        <div className="sidebarItem">
          <img src={karma} alt="karma icon" />

          <span>karma</span>
        </div>
      </div>

      <div className="sidebarItemGroup">
        <h1>BUSINESS</h1>

        <div className="sidebarItem">
          <img src={briefcase} alt="briefcase icon" />

          <span>Organization</span>
        </div>
        <div className="sidebarItem">
          <img src={loanRequest} alt="loans icon" />

          <span>loan products</span>
        </div>
        <div className="sidebarItem">
          <img src={savingProducts} alt="savings icon" />

          <span>savings products</span>
        </div>
        <div className="sidebarItem">
          <img src={feesAndCharges} alt="fees icon" />

          <span>fees and charges</span>
        </div>
        <div className="sidebarItem">
          <img src={transactions} alt="transactions icon" />

          <span>transactions</span>
        </div>
        <div className="sidebarItem">
          <img src={services} alt="services icon" />

          <span>services</span>
        </div>
        <div className="sidebarItem">
          <img src={serviceAccount} alt="serviceAccount icon" />

          <span>services account</span>
        </div>
        <div className="sidebarItem">
          <img src={settlement} alt="settlement icon" />

          <span>settlement</span>
        </div>
        <div className="sidebarItem">
          <img src={reports} alt="reports icon" />

          <span>reports</span>
        </div>
      </div>

      <div className="sidebarItemGroup">
        <h1>SETTINGS</h1>

        <div className="sidebarItem">
          <img src={preferences} alt="preferences icon" />

          <span>preferences</span>
        </div>
        <div className="sidebarItem">
          <img src={feesAndPercentage} alt="fees icon" />

          <span>fees and prices</span>
        </div>
        <div className="sidebarItem">
          <img src={auditLogs} alt="audit logs icon" />

          <span>audit logs</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
