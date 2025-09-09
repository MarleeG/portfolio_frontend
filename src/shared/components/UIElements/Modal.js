import React, { Fragment, useState, useEffect, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { Alert } from "react-bootstrap";
import ReactDOM from "react-dom";

import { randomColorGenerator } from "../util/ui-helper";
import Backdrop from "./Backdrop";
import { ThemeContext } from "../../../context/theme-context";
import Button from "./Button";

import "./Modal.css";

const ModalOverlay = (props) => {
  const {
    name,
    description,
    technologies,
    deployedLink,
    githubLink,
    projectType,
    projectMessage,
  } = props.project;

  const [color, setColor] = useState("black");
  const { isDark } = useContext(ThemeContext);

  // Hovering State
  // const [isBtnHoverOne, setIsBtnHoverOne] = useState(false);
  // const [isBtnHoverTwo, setIsBtnHoverTwo] = useState(false);

  const [borderStyleOne, setBorderStyleOne] = useState("solid");
  const [borderStyleTwo, setBorderStyleTwo] = useState("solid");

  const [animteOne, setAnimateOne] = useState("");
  const [animteTwo, setAnimateTwo] = useState("");

  const projectLinksInfo = [
    {
      text: "View Project",
      name: "btn-one",
      href: deployedLink,
    },
    {
      text: "Github",
      name: "btn-two",
      href: githubLink,
    },
  ];

  const isHovering = (name) => {
    if (name === "btn-one") {
      setBorderStyleOne("solid");
      setAnimateOne("headShake");
    } else {
      // name == btn-two
      setBorderStyleTwo("solid");
      setAnimateTwo("headShake");
    }
  };

  const notHovering = (name) => {
    if (name === "btn-one") {
      setBorderStyleOne("solid");
      setAnimateOne("");
    } else {
      setBorderStyleTwo("solid");
      setAnimateTwo("");
    }
  };

  const colorGenerator = () => {
    setColor(randomColorGenerator(isDark ? "dark" : "light"));
  };

  useEffect(() => {
    colorGenerator();
    // Regenerate accent if theme changes (e.g., switching system mode)
  }, [isDark]);

  const content = (
    <div
      className="center modal__container"
      style={{ borderLeft: `11.1vw solid ${color}` }}
    >
      <div className="wrapper">
        <div className="modal__project-name-wrap">
          <h1 className="modal__project-name font-neucha">{name}</h1>
        </div>

        {projectMessage && (
          <Alert
            className="center modal__project-alert-message"
            variant="warning"
          >
            {projectMessage}
          </Alert>
        )}

        {/* <br /> */}
        <div className="modal__project-info">
          <div className="modal__project-description-wrap font-sans center">
            <p className="modal__project-description">{description}</p>
          </div>

          {technologies.length > 0 && (
            <div className="modal__project-tech-wrap font-sans">
              <ul>
                {technologies.map((tech, idx) => (
                  <div className="center tech-list-wrapper" key={idx}>
                    <li key={idx}>{tech}</li>
                  </div>
                ))}
              </ul>
            </div>
          )}

          <div className="modal__project-links">
            {projectLinksInfo.map((pro, idx) => {
              return (
                <Button
                  key={idx}
                  name={pro.name}
                  target
                  href={pro.href}
                  onMouseEnter={isHovering}
                  onMouseLeave={notHovering}
                  classes={pro.name === "btn-one" ? animteOne : animteTwo}
                  styles={{
                    border: `2px ${
                      pro.name === "btn-one" ? borderStyleOne : borderStyleTwo
                    } ${color}`,
                  }}
                >
                  {pro.text}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="modal__project-collab font-sans">
          <p>Type: {projectType} project</p>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <Fragment>
      {props.show && (
        <Backdrop onClick={props.onHide} style={{ zIndex: 105 }} />
      )}

      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </Fragment>
  );
};

export default Modal;
