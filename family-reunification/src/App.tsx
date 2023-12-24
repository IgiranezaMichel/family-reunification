import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './Pages/Visitor/Home'
import { Contactus } from './Pages/Visitor/Contactus'
import { Login } from './Pages/Visitor/Login'
import { Signup } from './Pages/Visitor/Signup'
import { AdminHome } from './Pages/Admin/AdminHome'
import { Collaborator } from './Pages/Admin/Collaborator'
import { User } from './Pages/Admin/User'
import { Cases } from './Pages/Admin/Cases'
import { Report } from './Pages/Admin/Report'
import { Chat } from './Pages/Admin/Chat'
import { Setting } from './Pages/Admin/Setting'
const App=()=>{
  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact-us" element={<Contactus/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/admin" element={<AdminHome/>} />
          <Route path="/admin/user" element={<User/>} />
          <Route path="/admin/collaborator" element={<Collaborator/>} />
          <Route path="/admin/manage-cases" element={<Cases/>} />
          <Route path="/admin/report" element={<Report/>} />
          <Route path="/admin/chat" element={<Chat/>} />
          <Route path="/admin/setting" element={<Setting/>} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
