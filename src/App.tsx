import { useState } from "react";

import LoginPage from "./LoginPage";
import Dashboard from "./dashboard/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div id="App">
      {isLoggedIn ? <Dashboard /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;
