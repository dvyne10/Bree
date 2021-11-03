import React, { useState, createContext, useEffect } from 'react';

const AuthContext = createContext({});

const ProviderFunction = ({ children }) => {
  const [token, setToken] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContext.ProviderWrapper = ProviderFunction;

export default AuthContext;
