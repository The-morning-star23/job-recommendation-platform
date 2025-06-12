import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import Login from './pages/Login'
import Register from './pages/Register';
import Header from './pages/Header';
import CareerMatch from './pages/CareerMatch';
function App() {
  return (
    <Router>
      <><Header />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/career-match" element={<CareerMatch />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes></>
    </Router>
  )
}

export default App;
