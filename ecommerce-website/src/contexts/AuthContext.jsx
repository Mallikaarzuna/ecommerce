import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [loginPopUp, setShowLoginPopUP] = useState(false);

  const setUserDataHandler = (data) => setUserData(data);
  const showLoginPopUp = () => setShowLoginPopUP(true);

  const closeLoginPopUp = () => setShowLoginPopUP(false);

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserDataHandler,
        loginPopUp,
        showLoginPopUp,
        closeLoginPopUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AuthProvider;
