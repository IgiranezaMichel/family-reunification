import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './Pages/Home'
import { Contactus } from './Pages/Contactus'
const App=()=>{
  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact-us" element={<Contactus/>} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
