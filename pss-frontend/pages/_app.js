import React, { useEffect, useState } from "react";
import { UserContext } from "../components/Context/UserContext";
import "../styles/globals.css";
import Head from "next/head";
import { selectedUserInitialState } from "../constants/state";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  const [isNotGloria, setIsNotGloria] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [token, setToken] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(selectedUserInitialState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!token) {
        setToken(localStorage.getItem("token"));
      }

      if (!user) {
        if (!token) {
          setUser(localStorage.getItem("user"));
        }
      }
    }
  }, [token, user]);

  return (
    <UserContext.Provider
      value={{
        user,
        isNotGloria,
        isShow,
        token,
        usersList,
        selectedUser,
        setUser,
        setIsNotGloria,
        setIsShow,
        setToken,
        setUsersList,
        setSelectedUser
      }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
