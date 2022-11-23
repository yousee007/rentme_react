import {BrowserRouter as Router,Routes,Route}  from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profil from "./pages/Profil";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import ForgorPassword from "./pages/ForgorPassword";
import Header from "./Components/Header";


function App() {
  return (
     <>
        <Router>
        <Header />
          <Routes>
            <Route path ="/" element={< Home />} />
            <Route path ="/Offers" element={< Offers />} />
            <Route path ="/Profil" element={< Profil />} />
            <Route path ="/Sign-In" element={< SignIn />} />
            <Route path ="/Sig-nup" element={< Signup />} />
            <Route path ="/Forgor-Password" element={< ForgorPassword />} />
          </Routes>
        </Router>
     
     </>
     
  );
}

export default App;
