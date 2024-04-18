import "./Sidenavbar.css";
import sumitwo from "../Images/currency.jpg";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaAlignJustify } from "react-icons/fa";
import React, { useEffect } from "react";
// import resume from "../assets/resume.pdf";
import About from "../About/About";
import Myskills from "../Techskills/Techskills";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../fonts/fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faAddressCard,
  faBookOpenReader,
  faGraduationCap,
  faSquarePollVertical,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Education from "../Education/Education";
import Portfolio from "../Myportfolio/Myportfolio";

import AOS from "aos";
import "aos/dist/aos.css";
import { HashLink as Link } from "react-router-hash-link";
import ScrollToTop from "react-scroll-to-top";

import Contact from "../Contactpage/Contactpage";
import Contactpage from "../Contactpage/Contactpage";
import profileimg from "../Images/profileimg.jpg";

import { Modal,Button } from "@mui/material";

const Sidenavbar = () => {
  // const [file, setFile] = useState();
  const [type] = useTypewriter({
    words: ["Frond End Developer", "Web Designer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 3,
  });
  const [open, setOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = () => {
    if (selectedFiles) {
      console.log("Selected files:", selectedFiles);
      setSelectedFiles(null);
      handleClose();
    }
  };

  // const handleFile = (event) => {
  //   setFile(event.target.files[0]);
  // };
  // const handleUpload = () => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   fetch("url", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log("success", result);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };
  // useEffect(() => {
  //   const button = document.querySelector(".button");
  //   button.addEventListener("click", (e) => {
  //     e.preventDefault;
  //     button.classList.add("animate");
  //     setTimeout(() => {
  //       button.classList.remove("animate");
  //     }, 600);
  //   });
  // });
  // useEffect(() => {
  //   const mybutton = document.querySelector(".mybutton");
  //   mybutton.addEventListener("click", (e) => {
  //     e.preventDefault;
  //     mybutton.classList.add("animate");
  //     setTimeout(() => {
  //       mybutton.classList.remove("animate");
  //     }, 600);
  //   });
  // });

  useEffect(() => {
    AOS.init({ duration: 2000, delay: 5 });
  }, []);

  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <div className="sidecont row d-lg-none bg-white">
          {/* <div className="d-flex pt-2 pb-2 d-flex justify-content-between navhead">
            <div className="fs-3 fw-medium">Sumithra</div>
            <div className="fs-3 medium">
              <span onClick={handleShow}>
                <FaAlignJustify />
              </span>
            </div>
          </div> */}
          <Offcanvas
            show={show}
            onHide={handleClose}
            className="offcanhead m-0 p-1"
          >
            <Offcanvas.Header closeButton className="">
              <Offcanvas.Title>Sumithra</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <div className="d-flex justify-content-center">
                <div className="imgdiv">
                  <img
                    src={profileimg}
                    className="img-fluid"
                    style={{ borderRadius: "50%" }}
                  ></img>
                </div>
              </div>
              <div>
                <div>
                  <nav className="nav flex-column text-white mt-5">
                    <Link to="#home" className="text-decoration-none">
                      <a className="nav-link active w-100" aria-current="page">
                        <div className="pages d-flex justify-content-between fs-6">
                          <div> Home</div>
                          <div className="fs-5 navicon">
                            <FontAwesomeIcon icon={faHouseUser} size="sm" />
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link to="#about" className="text-decoration-none">
                      <a className="nav-link" aria-current="page">
                        <div className="d-flex justify-content-between fs-6">
                          <div>About</div>
                          <div className="fs-5 navicon">
                            <FontAwesomeIcon icon={faAddressCard} size="sm" />
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link to="#skill" className="text-decoration-none">
                      <a className="nav-link" aria-current="page">
                        <div className="d-flex justify-content-between fs-6">
                          <div> Skills </div>
                          <div className="fs-5 navicon">
                            <FontAwesomeIcon
                              icon={faBookOpenReader}
                              size="sm"
                            />
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link to="#education" className="text-decoration-none">
                      <a className="nav-link" aria-current="page">
                        <div className="d-flex justify-content-between fs-6">
                          <div>Education</div>
                          <div className="fs-5 navicon">
                            <FontAwesomeIcon icon={faGraduationCap} size="sm" />
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link to="#portfolio" className="text-decoration-none">
                      <a className="nav-link" aria-current="page" href="#">
                        <div className="d-flex justify-content-between fs-6">
                          <div className="naver">Portfolio</div>
                          <div className="fs-5 navicon">
                            <FontAwesomeIcon
                              icon={faSquarePollVertical}
                              size="sm"
                            />
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link to="#contact" className="text-decoration-none">
                      <a className="nav-link" aria-current="page" href="#">
                        <div className="d-flex justify-content-between fs-6">
                          <div>Contact Me</div>
                          <div className="fs-5 navicon">
                            <FontAwesomeIcon icon={faEnvelope} size="sm" />
                          </div>
                        </div>
                      </a>
                    </Link>
                  </nav>
                </div>

                <div className="navfoot d-flex">
                  <div className="linkedin">
                    <a
                      href="https://www.linkedin.com/in/sumithrafrontenddeveloper/"
                      className="text-white"
                    >
                      <RiLinkedinLine />
                    </a>
                  </div>
                  <div className="github">
                    <a
                      href="https://github.com/Sumithra-1011"
                      className="text-white"
                    >
                      <FiGithub />
                    </a>
                  </div>
                </div>

                <div></div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <div className="row d-flex align-items-start">
          <div className="col-lg-4 col-xl-3  sidebar sticky-top d-none d-lg-block p-0">
            <div className="d-flex justify-content-center">
              <div className="imgdiv">
                <img src={profileimg} className="img-fluid"></img>
              </div>
            </div>

            <div>
              <nav className="nav flex-column text-white mt-5">
                <Link to="#home" className="text-decoration-none">
                  <a className="nav-link active" aria-current="page">
                    <div className="d-flex justify-content-between">
                      <div> Home</div>
                      <div className=" navicon">
                        <FontAwesomeIcon icon={faHouseUser} size="sm" />
                      </div>
                    </div>
                  </a>
                </Link>
                <Link to="#about" className="text-decoration-none">
                  <a className="nav-link" aria-current="page" href="#">
                    <div className="d-flex justify-content-between ">
                      <div>About</div>
                      <div className=" navicon">
                        <FontAwesomeIcon icon={faAddressCard} size="sm" />
                      </div>
                    </div>
                  </a>
                </Link>
                <Link to="#skill" className="text-decoration-none">
                  <a className="nav-link" aria-current="page" href="#">
                    <div className="d-flex justify-content-between ">
                      <div> Skills </div>
                      <div className="navicon">
                        <FontAwesomeIcon icon={faBookOpenReader} size="sm" />
                      </div>
                    </div>
                  </a>
                </Link>

                <Link to="#education" className="text-decoration-none">
                  <a className="nav-link" aria-current="page">
                    <div className="d-flex justify-content-between ">
                      <div>Education</div>
                      <div className="navicon">
                        <FontAwesomeIcon icon={faGraduationCap} size="sm" />
                      </div>
                    </div>
                  </a>
                </Link>
                <Link to="#portfolio" className="text-decoration-none">
                  <a className="nav-link" aria-current="page" href="#">
                    <div className="d-flex justify-content-between ">
                      <div className="naver">Portfolio</div>
                      <div className="navicon">
                        <FontAwesomeIcon
                          icon={faSquarePollVertical}
                          size="sm"
                        />
                      </div>
                    </div>
                  </a>
                </Link>
                <Link to="#contact" className="text-decoration-none">
                  <a className="nav-link" aria-current="page" href="#">
                    <div className="d-flex justify-content-between ">
                      <div>Contact Me</div>
                      <div className="navicon">
                        <FontAwesomeIcon icon={faEnvelope} size="sm" />
                      </div>
                    </div>
                  </a>
                </Link>
              </nav>
            </div>

            <div className="navfoot d-flex">
              <div className="linkedin">
                <a
                  href="https://www.linkedin.com/in/sumithrafrontenddeveloper/"
                  className="text-white"
                >
                  <RiLinkedinLine />
                </a>
              </div>
              <div className="github">
                <a
                  href="https://github.com/Sumithra-1011"
                  className="text-white"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
            <div>
              <Button style={{marginLeft:120,marginTop:50}} variant="contained" color="primary" onClick={handleOpen}>
                Choose File
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="file-upload-modal"
                aria-describedby="file-upload-modal-description"
              >
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <h2 style={{marginBottom:30}} id="file-upload-modal">Select Files</h2>
                  <input type="file" onChange={handleFileChange} multiple />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpload}
                  >
                    Upload File
                  </Button>
                </div>
              </Modal>
            </div>
            {/* <div style={{ width: 30, marginLeft: 100, marginTop: 50 }}>
              <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFile} />
              </form>
            </div> */}
          </div>

          <div className="homecon" id="home">
            <div className=" row namecontainer w-100 m-0 item">
              <div class=" wrapper">
                <div className="">
                  <h2
                    className="display-5 w-100 text-center mb-3"
                    style={{
                      color: "#00B87B",
                      fontWeight: "600",
                      fontSize: 50,
                    }}
                  >
                    HI, I'M SUMITHRA
                  </h2>
                  <div className=" mx-auto text-center text-white">
                    <h5 style={{ color: "goldenrod", marginBottom: "1rem" }}>
                      {type}
                      <span>
                        <Cursor cursorStyle="|" />
                      </span>
                    </h5>

                    {/* {/ <span className="one">Front End Developer</span> /} */}
                  </div>

                  <b className="para">
                    A front-end focused web developer dedicated to crafting
                    seamless user experiences. Passionate about leveraging
                    design and technology to create engaging websites
                  </b>
                  <div>
                    <div className="d-flex justify-content-center  aligin-item-center mt-5 mb-4 flex-column flex-sm-row">
                      <div className="topbtn">
                        <button class="button me-sm-4 mb-4 mb-sm-0 mr-12">
                          <a download="resume">Download CV</a>
                        </button>
                        <button class="button me-sm-4 mb-4 mb-sm-0">
                          <a download="resume">Contact Me</a>
                        </button>
                        {/* <Link to="#contact" className="button me-sm-4 mb-4 mb-sm-0">
                          <button className="mybutton ">Contact Me</button>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row ms-0 me-0 mt-5 mb-5 p-3 p-sm-5 item"
              id="about"
              data-aos="zoom-in"
              style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
            >
              <About />
            </div>

            <div
              className="row ms-0 me-0 mt-5 mb-5 p-sm-5 item"
              id="skill"
              style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
            >
              <Myskills />
            </div>

            <div
              className="row ms-0 me-0 mt-5 mb-5 p-sm-5 item "
              id="education"
              style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
            >
              <Education />
            </div>

            <div
              className="row ms-0 me-0 mt-5 mb-5 p-sm-5 item "
              id="portfolio"
              style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
            >
              <Portfolio />
            </div>

            <div
              className="row ms-0 me-0 mt-5 mb-2 p-sm-5 item"
              id="contact"
              data-aos="zoom-in-down"
              style={{ boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" }}
            >
              <Contactpage></Contactpage>
            </div>

            <div>
              <ScrollToTop
                smooth="true"
                top="700"
                className="scroll"
                width="35"
                height="20"
                color="white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidenavbar;
