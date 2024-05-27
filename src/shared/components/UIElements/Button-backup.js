import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <a href={props.href && props.href} target={props.target ? "_blank" : ""}>
      <button
        type={props.type || "button"}
        className={`button animated font-neucha${props.classes}`}
        style={props.styles}
        onClick={() => {
          if (props.onClick) {
            props.onClick();
            props.updateModalContent("");
            props.updateModalContent(props.text);
          }
        }}
        onMouseEnter={() => {
          if (props.onMouseEnter) {
            props.onMouseEnter(props.name);
          }
        }}
        onMouseLeave={() => {
          if (props.onMouseLeave) {
            props.onMouseLeave(props.name);
          }
        }}
      >
        {props.children}
      </button>
    </a>
  );
};

export default Button;
