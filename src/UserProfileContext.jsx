import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const UserProfileContext = createContext();

const UserProfileProvider = ({ children }) => {
  // const navigate = useNavigate();
  // const [isUserLogin, setIsUserLogin] = useState();

  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // GetUserLoginAPI
    const token = JSON.parse(localStorage.getItem("token"));
    const storeToken = JSON.parse(localStorage.getItem("userData"));
    console.log("////////////////////////////////////", storeToken)

    // console.log(storeToken)
    if (storeToken) {
      //  console.log(storeToken)
      setUserData(storeToken);
      return;
    }
    
    console.log("////////////////////////////////////",token)

    if (token) {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get(`https://api.escuelajs.co/api/v1/auth/profile`, headers)
        .then((res) => {
          localStorage.setItem("userData", JSON.stringify(res.data));
          setUserData(res.data);
          console.log("User Details", res.data);
        })
        .catch((err) => {
          console.log("Not Getting data", err.data);
        });
    }
  }, []);
  return (
    <UserProfileContext.Provider
      value={{ userData, setUserData, isLoading, setIsLoading }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};
export default UserProfileProvider;

export const useProfileAuth = () => useContext(UserProfileContext);
