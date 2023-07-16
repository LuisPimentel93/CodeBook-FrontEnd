import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Components/NavBar';
import Home from "./Components/Home"
import SignIn from './Components/SignIn';
import Signup from './Components/Signup';
import Forum from "./Components/Forum";
import Profile from "./Components/Profile";
import Footer from "./Components/Footer";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<Signup />} />
        </Routes>
        <Footer/>
      </Router>

    </div>

  );
}


export default App;
