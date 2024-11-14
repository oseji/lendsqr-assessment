import { useState } from "react";

import lendSqrLogo from "./assets/Logo.svg";
import loginPageImage from "./assets/pablo-sign-in 1.png";

type loginPageProps = {
  setIsLoggedIn: (loading: boolean) => void;
};

const LoginPage = (props: loginPageProps) => {
  const [passwordSpan, setPasswordSpan] = useState<"show" | "hide">("show");

  return (
    <div id="loginPage">
      <section>
        <div className="sectionGroups">
          <img src={lendSqrLogo} alt="Lendsqr's logo" className="logo" />

          <img src={loginPageImage} alt="image" className="loginPageImage" />
        </div>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="sectionGroups"
        >
          <div>
            <h1>Welcome!</h1>

            <p style={{ marginBottom: "60px" }}>Enter details to login.</p>

            <div className="loginInputGroup">
              <input
                type="email"
                inputMode="email"
                name="emailAddress"
                id="emailAddress"
                placeholder="Email"
                required={true}
              />
            </div>

            <div className="loginInputGroup">
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                required={true}
              />

              <span
                style={{
                  color: "#39CDCC",
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  passwordSpan === "show"
                    ? setPasswordSpan("hide")
                    : setPasswordSpan("show");
                }}
              >
                {passwordSpan}
              </span>
            </div>

            <p
              style={{
                color: "#39CDCC",
                fontSize: "0.75rem",
                marginBottom: "30px",
                cursor: "pointer",
              }}
            >
              FORGOT PASSWORD?
            </p>

            <button
              onClick={() => {
                props.setIsLoggedIn(true);
              }}
            >
              LOG IN
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
