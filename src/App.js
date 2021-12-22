import React from 'react'
import { BrowserRouter as Router, Routes ,Route, Link } from "react-router-dom"
import './App.css'
import Beranda from './Pages/Beranda'
import Tentang from './Pages/Tentang'
import Faq from './Pages/Faq'
import Dashboard from './Pages/User/Dashboard'
import Pendaftaran from './Pages/Pendaftaran'

function App() {
  return (
      <Router>
          <Routes>
            <Route path='/' element={<Beranda />} />
            <Route path='/tentang' element={<Tentang />} />
            <Route path='/bantuan/faqs' element={<Faq />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/pendaftaran' element={<Pendaftaran />} />
          </Routes>
      </Router>
  );
}

export default App;
