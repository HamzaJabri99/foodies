import Categorie from "./components/Categorie";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiFoodTruck } from "react-icons/gi";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Logo to={"/"}>
            <GiFoodTruck /> <span style={{ color: "#f37878" }}>foo</span>dies
          </Logo>
        </Nav>
        <Search />
        <Categorie />
        <Pages />
      </Router>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
export default App;
