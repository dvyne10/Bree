import React, { useContext } from 'react';
import AuthFlow from '~/navigation/AuthFlow';
import DrawerNavigation from './DrawerNavigation';
import AuthContext from '../context/authContext';

const RootNavigator = () => {
  const { token } = useContext(AuthContext);
  return <>{token ? <DrawerNavigation /> : <AuthFlow />}</>;
};

export default RootNavigator;
