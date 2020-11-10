import React, { useEffect } from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  // Fetch data for Profile
  useEffect(() => {
    fetch(`/api/me/profile`)
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        setCurrentUser(data.profile);
        setStatus("idle");
      });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        status,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
