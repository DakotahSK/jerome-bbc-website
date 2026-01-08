import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import Button from '../shared/Button';

const SESSION_KEY = 'jbbc_admin_session';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session
    localStorage.removeItem(SESSION_KEY);
    // Redirect to login
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-green-lighter">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Jerome Bible Baptist Church"
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-charcoal">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Church Content Management</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white mt-auto py-4 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>Jerome Bible Baptist Church Admin Panel</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;
