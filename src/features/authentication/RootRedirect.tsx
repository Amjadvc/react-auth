import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '@/services/auth';

function RootRedirect() {
  return isAuthenticated() ? (
    <Navigate to="/home" replace />
  ) : (
    <Navigate to="/landing" replace />
  );
}

export default RootRedirect;
