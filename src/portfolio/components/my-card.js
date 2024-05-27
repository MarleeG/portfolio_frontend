import React from "react";
import getImageByName from "./assets/data";

import "./my-card.css";
const MyCard = (props) => {
  const IMG_SRC = getImageByName(props.data.imgName, props.s3Images)[0].src;
  return (
    <div className="container animated fadeInRightBig slow-2s">
      <div className="item">
        {IMG_SRC && <img src={IMG_SRC} alt={props.data.name} className="card__project-img"/>}

        <div className="overlay center">
          <span
            className="card__plus-icon"
            onClick={() => {
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
