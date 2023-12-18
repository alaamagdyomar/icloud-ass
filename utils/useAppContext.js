import { useContext } from 'react';
import AppContext from '../context/state';

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;
