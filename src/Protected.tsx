import { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';
import { getAuthToken } from './api/services';

interface ProtectedProps {
  children: ReactNode;
}

const Protected = ({ children }: ProtectedProps) => {


  const isAuth = getAuthToken();

  return isAuth ? children : <Navigate to='/login' />;
};

export default Protected;
