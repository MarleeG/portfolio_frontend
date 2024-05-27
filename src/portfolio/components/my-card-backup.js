import React from "react";
import {
  paraPhrase
} from "../../shared/components/util/ui-helper";

// css overlay example
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_slidebottom

import "./my-card.css";
const MyCard = (props) => {
  return (
    <div className="container animated fadeInRightBig slow-2s">
      <div className="item">
        <h2 className="card_primary_h2">{props.data.name}</h2>
        <span className="card__span"></span>

        <p className="card__description" style={{ float: "left" }}>
          {props.data.description
            ? paraPhrase(props.data.description, 20)
            : null}
        </p>

        <div className="overlay center">
          <span
            className="card__plus-icon"
            onClick={() => {
              console.log(props.data)
              props.handleModalOpen();
              props.getProjectById(props.data._id);
            }}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyCard;