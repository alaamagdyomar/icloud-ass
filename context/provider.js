import React from 'react';
import AppContext from './state';
import useAppState from './helpers';

const AppProvider = ({ children }) => {
  const state = useAppState();

  return (
    <AppContext.Provider value={state}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
