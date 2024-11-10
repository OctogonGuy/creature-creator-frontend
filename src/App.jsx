import './App.css'
import List from "./pages/List.jsx";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Create from "./pages/Create.jsx";
import Single from "./pages/Single.jsx";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="banner" to="/creature-creator"><img className="logo" src="/logo.svg" alt="Creature Creator"/></Link>
      </header>
      <nav className="navbar">
        <ul className="links">
          <li>
            <Link to={"/creature-creator/create"}>Create</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/creature-creator" element={<Navigate to="/creature-creator/creatures?page=1" replace/>}/>
        <Route path="/creature-creator/creatures" element={<List/>}/>
        <Route path="/creature-creator/creature/:id" element={<Single/>}/>
        <Route path="/creature-creator/create" element={<Create/>}/>
      </Routes>
      <footer>
        <a className="website" href="https://octopusdragon.tech/"><img className="icon"
                                                                       src="https://octopusdragon.tech/favicon.ico"
                                                                       alt="OctopusDragonTech icon"/></a>
        <p className="copyright">&#169; 2024 OctopusDragonTech</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
