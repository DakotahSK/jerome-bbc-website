import { Navigate } from 'react-router-dom';

const SESSION_KEY = 'jbbc_admin_session';
const SESSION_DURATION = 2 * 60 * 60 * 1000; // 2 hours in milliseconds

/**
 * Check if the admin session is valid
 */
const isAuthenticated = () => {
  try {
    const sessionData = localStorage.getItem(SESSION_KEY);
    if (!sessionData) return false;

    const session = JSON.parse(sessionData);
    const now = Date.now();

    // Check if session exists and hasn't expired
    if (session.authenticated && session.timestamp) {
      const sessionAge = now - session.timestamp;
      return sessionAge < SESSION_DURATION;
    }

    return false;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
};

/**
 * Protected Route component - requires authentication to access
 */
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect to admin login if not authenticated
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
