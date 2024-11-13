import logo from "../assets/Logo.svg";
import search from "../assets/search.svg";
import bell from "../assets/bell.svg";
import avatar from "../assets/avatar.png";

const DashboardHeader = () => {
  return (
    <header>
      <img src={logo} alt="lendsqr's logo" />

      <div className="loginInputGroup">
        <input
          type="text"
          inputMode="search"
          name="searchbar"
          id="searchbar"
          placeholder="Search for anything"
        />

        <button>
          <img src={search} alt="Search icon" />
        </button>
      </div>

      <div className="headerGroup">
        <span>Docs</span>

        <img src={bell} alt="Notification icon" />

        <img src={avatar} alt="Profile picture" />
      </div>
    </header>
  );
};

export default DashboardHeader;
