import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './templates/Home'
import Login from './templates/Login'
import Signup from './templates/Signup'
import Products from './templates/Products'
import About from './templates/About'
import Contact from './templates/Contact'
import Styleguide from './templates/Styleguide'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/styleguide" element={<Styleguide />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Redirect any unknown route to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
