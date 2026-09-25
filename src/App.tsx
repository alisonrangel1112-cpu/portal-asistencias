import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Campus from './pages/campus';
import Attendances from './pages/attendances';
import Reports from './pages/reports';
import Backlog from './pages/backlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/attendances" element={<Attendances />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/backlog" element={<Backlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;