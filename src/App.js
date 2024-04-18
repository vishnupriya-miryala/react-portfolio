// import About from "./About/About";
// import Education from "./Education/Education";
// import Myportfolio from "./Myportfolio/Myportfolio";
// import Skills from "./Techskills/Techskills";
import "./App.css";
// import Contactpage from "./Contactpage/Contactpage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter } from "react-router-dom";
import Sidenavbar from "./Sidenavbar/Sidenavbar";



function App() {
  return (
    <>
    <Container>
      <Row>

      </Row>
    </Container>
    <BrowserRouter>
    <Sidenavbar></Sidenavbar>
    </BrowserRouter>
      {/* <div className="whole-cont">
        <About />
        <Skills/>
        <Education/>
        <Myportfolio/>
        <Contactpage/>
      </div> */}
    </>
  );
}
export default App;
