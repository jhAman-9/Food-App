import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import {Provider} from 'react-redux'
import appStore from "./utils/appStore";

function App() {
  const [userName, setUserName] = useState("Aman Kumar Jha");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <>
          <Header />
          <Outlet />
        </>
      </UserContext.Provider>
    </Provider>
  ); 
}

export default App;
