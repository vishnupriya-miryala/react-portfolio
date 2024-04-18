import React, { useState } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import { OverlayTrigger } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import weather from "../Images/weatherwise.jpg";
import '../../src/App.css';
import "./Myportfolio.css";
import online from "../Images/onlinelearning.jpg";
import food from '../Images/organicfood.jpg';
import curency from '../Images/currency.jpg';

import {
  faArrowUpRightFromSquare,
  faLink,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import bmi from "../Images/bmimeasure2.jpg";
import tictac from '../Images/tictoctoe.jpg';


function Myportfolio() {
  const [weathershow, Setweathershow] = useState(false);
  const[onlineshow,Setonlineshow]=useState(false);
  const [show,setShow]=useState(false);
  const [tictacshow,Settictacshow]=useState(false);
  const[bmishow,Setbmishow]=useState(false);
  const[curencyshow,Setcurencyshow]=useState(false);



  return (
    <>
    <div style={{}}>
      <div>
        <h2 className="ps-3 p-sm-0">MY PORTFOLIO</h2>
        <div className="d-flex ps-3 p-sm-0">
          <div className="round"></div>
          <div className="line mt-1 ms-2"></div>
        </div>
      </div>

      <div data-aos="zoom-in ">
        <Card
          className=" cad col-11 col-lg-9 mx-auto p-4 mb-5"
          onClick={() => Setweathershow(!weathershow)}
        >
          <div className="imageport">
            <div className="cardimg">
              <Card.Img
                variant="top"
                src={weather}
                alt="wether"
                className="image"
              />
            </div>
            <Card.Body className="p-0 cardbody mt-3">
              <Card.Title className="p-0 d-flex justify-content-center text-center">
                <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                  WeatherWise - Weather API
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xs"
                    className="ms-2 iconright"
                  />
                </p>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>

        <div className="">
          <Offcanvas
            show={weathershow}
            onHide={() => Setweathershow(!weathershow)}
            backdrop="static"
            placement={"top"}
            className="offcanvas"
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body style={{ padding: " 0 20px " }}>
              <div className="row">
                <div className="col-lg-5 offcanvaImagediv me-4">
                  <img src={weather} fluid alt="weather"></img>
                </div>
                <div className="col-lg-6 offcanvaPara">
                  <h2 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                    WeatherWise - Weather API
                  </h2>
                  <div>
                    <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                      Technologies Used:
                    </h5>
                    <h6
                      style={{ color: "white" }}
                      className="fw-bold mt-3 mb-3"
                    >
                      React js,WeatherAPI ,css
                    </h6>
                  </div>
                  <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                    Challenges Overcome:
                  </h5>
                  <p style={{ color: "white" }}>
                    <span
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3"
                    >
                      Async/Await Functions:
                    </span>{" "}
                    Effectively implementing async/await functions to handle
                    asynchronous requests and responses from weather APIs,
                    ensuring smooth data retrieval and display
                  </p>
                  +
                  <p style={{ color: "white" }}>
                    <span
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3"
                    >
                      Error Handling:
                    </span>{" "}
                    Implementing error handling mechanisms within async/await
                    functions to gracefully manage API request failures and
                    display informative error messages to users.
                  </p>
                  <div className="d-flex justify-content-center gap-4 projectbtn text-center">
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Preview
                        </Tooltip>
                      }
                    >
                      <a
                        className=""
                        href="https://allcityweatherinreact.netlify.app"
                      >
                        <FontAwesomeIcon icon={faEye} size="sm" />
                      </a>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Source Code
                        </Tooltip>
                      }
                    >
                      <a
                        className=""
                        href="https://github.com/Sumithra-1011/weather-app"
                      >
                        <FontAwesomeIcon icon={faLink} size="sm" />
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>

      <div  data-aos="zoom-in">
        <Card
          className=" cad col-11 col-lg-9 mx-auto p-4"
          onClick={() => Setonlineshow(!onlineshow)}
        >
          <div className="imageport">
            <div className="cardimg p-0">
              <Card.Img variant="top" src={online} alt="top" className="image p-0" />
            </div>
            <Card.Body className="p-0 cardbody mt-3">
              <Card.Title className="p-0 d-flex justify-content-center text-center">
                <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                  Online Learning platform
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xs"
                    className="ms-2 iconright"
                  />
                </p>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>

        <div>
          <Offcanvas
            show={onlineshow}
            onHide={() => Setonlineshow(!onlineshow)}
            backdrop="static"
            placement={"top"}
            className="offcanvas"
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body style={{ padding: " 0 20px " }}>
              <div className="row">
                <div className="col-lg-5 offcanvaImagediv me-4">
                  <img src={online} alt="online" fluid></img>
                </div>
                <div className="col-lg-6 offcanvaPara">
                  <h2 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                    Online Learning platform{" "}
                  </h2>
                  <div>
                    <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                      Technologies Used:
                    </h5>          
                    <h6
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3 mb-3"
                    >
                      HTML, CSS, JavaScript, Bootstrap
                    </h6>
                  </div>
                  <p className="text-white">
                    "Learnify is an intuitive online course platform crafted
                    with HTML, CSS, and JavaScript. Offering a diverse catalog
                    of courses, personalized learning paths, and interactive
                    content. Empowering learners to track progress, engage with
                    peers, and achieve their educational goals. Utilizes
                    Bootstrap for responsive design and Vanilla JavaScript for
                    dynamic interactions. Provides a seamless and engaging
                    learning experience without relying on backend technologies.
                  </p>

                  <div className="d-flex justify-content-center gap-4 projectbtn text-center " style={{marginLeft:400}}>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Preview
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://online-ecourses.netlify.app">
                        <FontAwesomeIcon icon={faEye} size="sm" />
                      </a>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Source Code
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://github.com/Sumithra-1011/online-course">
                        <FontAwesomeIcon icon={faLink} size="sm" />
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>

      <div  data-aos="zoom-in">
        <Card
          className=" cad col-11 col-lg-9 mx-auto p-4 mb-5"
          onClick={() => setShow(!show)}
        >
          <div className="imageport">
            <div className="cardimg">
              <Card.Img variant="top" src={food} alt="food" className="image" />
            </div>
            <Card.Body className="p-0 cardbody mt-3">
              <Card.Title className="p-0 d-flex justify-content-center text-center">
                <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                  Organic Food E-commerce Website
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xs"
                    className="ms-2 iconright"
                  />
                </p>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>

        <div className="project">
          <Offcanvas
            show={show}
            onHide={() => setShow(!show)}
            backdrop="static"
            placement={"top"}
            className="offcanvas"
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body style={{ padding: " 0 20px " }}>
              <div className="row">
                <div className="col-lg-5 offcanvaImagediv me-4">
                  <img src={food}  alt="food"fluid></img>
                </div>
                <div className="col-lg-6 offcanvaPara">
                  <h2 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                    Organic Food E-commerce Website
                  </h2>
                  <div>
                    <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                      Technologies Used:
                    </h5>
                    <h6
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3 mb-3"
                    >
                      HTML, CSS, JavaScript, Bootstrap
                    </h6>
                  </div>
                  <p className="text-white">
                    A visually captivating e-commerce website specializing in
                    organic food. Leveraging HTML, CSS, JavaScript, and
                    Bootstrap for seamless frontend development. Features a
                    modern design, intuitive navigation, and interactive
                    elements. Ensures responsiveness across devices and
                    optimized performance for enhanced user experience.
                    Demonstrates frontend expertise in creating visually
                    appealing and user-friendly interfaces.
                  </p>

                  <div className="d-flex justify-content-center gap-4 projectbtn text-center" style={{marginLeft:400}}>
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Preview
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://organic-food-order.netlify.app">
                        <FontAwesomeIcon icon={faEye} size="sm" />
                      </a>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Source Code
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://github.com/Sumithra-1011/organic-food">
                        <FontAwesomeIcon icon={faLink} size="sm" />
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>

      <div  data-aos="zoom-in">
        <Card
          className=" cad col-11 col-lg-9 mx-auto p-4 mb-5"
          onClick={() => Settictacshow(!tictacshow)}
        >
          <div className="imageport">
            <div className="cardimg">
              <Card.Img variant="top" src={tictac} className="image" />
            </div>
            <Card.Body className="p-0 cardbody mt-3">
              <Card.Title className="p-0 d-flex justify-content-center text-center">
                <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                  Tic Tac Toe Game
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xs"
                    className="ms-2 iconright"
                  />
                </p>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>

        <div>
          <Offcanvas
            show={tictacshow}
            onHide={() => Settictacshow(!tictacshow)}
            backdrop="static"
            placement={"top"}
            className="offcanvas"
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body style={{ padding: " 0 20px " }}>
              <div className="row">
                <div className="col-lg-5 offcanvaImagediv me-4">
                  <img src={tictac} fluid alt="curency"></img>
                </div>
                <div className="col-lg-6 offcanvaPara">
                  <h2 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                    Tic Tac Toe Game
                  </h2>
                  <div>
                    <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                      Technologies Used:
                    </h5>
                    <h6
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3 mb-3"
                    >
                      HTML, CSS, JavaScript
                    </h6>
                  </div>
                  <p className="text-white">
                    Tic Tac Toe Challenge is a classic game implemented using
                    HTML, CSS, and JavaScript, featuring a forEach loop for
                    efficient board management. With its intuitive gameplay and
                    visually appealing design, Tic Tac Toe Challenge offers
                    hours of fun and entertainment for players of all ages.
                  </p>

                  <div style={{marginLeft:400}} className="d-flex justify-content-center gap-4 projectbtn text-center">
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Preview
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://tic-tac-toe-game-playall.netlify.app">
                        <FontAwesomeIcon icon={faEye} size="sm" />
                      </a>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Source Code
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://github.com/Sumithra-1011/Tic-Tac-Toe-Game">
                        <FontAwesomeIcon icon={faLink} size="sm" />
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
  

     
      <div  data-aos="zoom-in">
        <Card
          className=" cad col-11 col-lg-9 mx-auto p-4 mb-5"
          onClick={() => Setbmishow(!bmishow)}
        >
          <div className="imageport">
            <div className="cardimg">
              <Card.Img variant="top" src={bmi} className="image" alt="curency" />
            </div>
            <Card.Body className="p-0 cardbody mt-3">
              <Card.Title className="p-0 d-flex justify-content-center text-center">
                <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                  BMI Calculator
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xs"
                    className="ms-2 iconright"
                  />
                </p>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>

        <div>
          <Offcanvas
            show={bmishow}
            onHide={() => Setbmishow(!bmishow)}
            backdrop="static"
            placement={"top"}
            className="offcanvas"
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body style={{ padding: " 0 20px " }}>
              <div className="row">
                <div className="col-lg-5 offcanvaImagediv me-4">
                  <img src={bmi} fluid alt="curency"></img>
                </div>
                <div className="col-lg-6 offcanvaPara">
                  <h2 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                    BMI Calculator
                  </h2>
                  <div>
                    <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                      Technologies Used:
                    </h5>
                    <h6
                      style={{ color: "white" }}
                      className="fw-bold mt-3 mb-3"
                    >
                      React Js,useState hook,CSS
                    </h6>
                  </div>
                  <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                    Challenges Overcome:
                  </h5>
                  <p style={{ color: "white" }}>
                    <span
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3"
                    >
                      State Management with useState:
                    </span>{" "}
                    Effectively utilized the useState hook to manage dynamic
                    user inputs and update BMI results in real-time, ensuring
                    accuracy and responsiveness.
                  </p>

                  <p style={{ color: "white" }}>
                    <span
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3"
                    >
                      BMI Calculation Logic:
                    </span>{" "}
                    Implemented robust BMI calculation logic to accurately
                    interpret user height and weight measurements and provide
                    corresponding BMI results and weight categories.
                  </p>

                  <div style={{marginLeft:400}}className="d-flex justify-content-center gap-4 projectbtn text-center">
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Preview
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://bmi-calculator-react-js.netlify.app">
                        <FontAwesomeIcon icon={faEye} size="sm" />
                      </a>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Source Code
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://github.com/Sumithra-1011/bmi-Calculator">
                        <FontAwesomeIcon icon={faLink} size="sm" />
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    

   
      <div  data-aos="zoom-in" style={{marginBottom:"40px"}}>
        <Card
          className=" cad col-11 col-lg-9 mx-auto p-4" 
          onClick={() => Setcurencyshow(!curencyshow)}
        >
          <div className="imageport">
            <div className="cardimg">
              <Card.Img variant="top" src={curency} className="image"  alt="curency"/>
            </div>
            <Card.Body className="p-0 cardbody mt-3">
              <Card.Title className="p-0 d-flex justify-content-center text-center">
                <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                  Currency Converter
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xs"
                    className="ms-2 iconright"
                  />
                </p>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>

        <div>
          <Offcanvas
            show={curencyshow}
            onHide={() => Setcurencyshow(!curencyshow)}
            backdrop="static"
            placement={"top"}
            className="offcanvas"
          >
            <Offcanvas.Header closeButton />
            <Offcanvas.Body style={{ padding: " 0 20px " }}>
              <div className="row">
                <div className="col-lg-5 offcanvaImagediv me-4">
                  <img src={curency} fluid alt="curency"></img>
                </div>
                <div className="col-lg-6 offcanvaPara">
                  <h2 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                    Currency Converter
                  </h2>
                  <div>
                    <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                      Technologies Used:
                    </h5>
                    <h6
                      style={{ color: "white" }}
                      className="fw-bold mt-3 mb-3"
                    >
                      React Js, API Integration with Axios,css
                    </h6>
                  </div>
                  <h5 style={{ color: "goldenrod" }} className="fw-bold mt-3">
                    Challenges Overcome:
                  </h5>
                  <p style={{ color: "white" }}>
                    <span
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3"
                    >
                      API Integration with Axios
                    </span>{" "}
                    Implemented robust data fetching and error handling
                    mechanisms with Axios to fetch real-time exchange rate data
                    from financial APIs, ensuring accuracy and reliability in
                    currency conversions.
                  </p>
                  <p style={{ color: "white" }}>
                    <span
                      style={{ color: "goldenrod" }}
                      className="fw-bold mt-3"
                    >
                      State Management:
                    </span>{" "}
                    Utilized React.js useState hook for handling dynamic state
                    changes, ensuring seamless updates to conversion results and
                    exchange rates.
                  </p>

                  <div style={{marginLeft:400}}className="d-flex justify-content-center gap-4 projectbtn text-center">
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Preview
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://currencyconverter-reactjs.netlify.app">
                        <FontAwesomeIcon icon={faEye} size="sm" />
                      </a>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip
                          id={`tooltip-${"top"}`}
                          style={{ backgroundColor: "transparent" }}
                          className="tooltip"
                        >
                          Source Code
                        </Tooltip>
                      }
                    >
                      <a className="" href="https://github.com/Sumithra-1011/Currencyconverter-react">
                        <FontAwesomeIcon icon={faLink} size="sm" />
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
      </div>
    </>
  );
}
export default Myportfolio;
