
import { useState } from "react";
import {
  BrowserRouter as Router,
  
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import "./index.css"

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <Router>

    <div className={darkTheme ? 'dark' : ''}>
     <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
     <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
     <Routes/>
     <Footer/>
     </div>
    </div>
    </Router>
  );
}

export default App;
