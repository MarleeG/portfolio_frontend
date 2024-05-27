import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import './SideDrawer.css';

const MobileSideDrawer = props => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="mobile-side-drawer" onClick={props.onClick}
      style={props.styles}
      >
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default MobileSideDrawer;
