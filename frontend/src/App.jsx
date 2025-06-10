import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateJob from './pages/CreateJob';
import JobList from './pages/JobList';
import Recommendations from './pages/Recommendations';
import Navbar from './pages/Navbar';
import PrivateRoute from "./components/PrivateRoute";

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
