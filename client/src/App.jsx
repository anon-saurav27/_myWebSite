import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'

export default function App() {
  return (
     <BrowserRouter>
     <Header />
     <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
     </BrowserRouter>
  )
}
