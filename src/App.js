import Categorie from "./components/Categorie";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <Router>
        <NavLink to="./">Hello</NavLink>
        <Search />
        <Categorie />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
