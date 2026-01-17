import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import ChildrensMinistry from './pages/ChildrensMinistry';
import StudentMinistry from './pages/StudentMinistry';
import AdultMinistry from './pages/AdultMinistry';
import WorldwideMissions from './pages/WorldwideMissions';
import MissionaryApplication from './pages/MissionaryApplication';
import Sermons from './pages/Sermons';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import AdminLogin from './components/admin/AdminLogin';
import ProtectedRoute from './components/admin/ProtectedRoute';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/ministries/childrens" element={<ChildrensMinistry />} />
            <Route path="/ministries/students" element={<StudentMinistry />} />
            <Route path="/ministries/adults" element={<AdultMinistry />} />
            <Route path="/ministries/missions" element={<WorldwideMissions />} />
            <Route path="/ministries/missionary-application" element={<MissionaryApplication />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
