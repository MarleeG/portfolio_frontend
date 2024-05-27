import React, { useState, useEffect } from "react";
import { randomColor } from "randomcolor";

import "./social-media-card.css";

const SocalMediaCard = (props) => {
  const [color, setColor] = useState("#74ebd5");
  let icon = props.img();

  const randomColorGenerator = () => {
    const ranColor = randomColor({
      luminosity: "light",
      format: "rgba",
      alpha: 0.5, // e.g. 'rgba(9, 1, 107, 0.5)',
    });

    setColor(ranColor);
  };

  useEffect(() => {
    randomColorGenerator();
  }, []);

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className="smc__container center">
        <div className="smc__wrapper">
          <div className="smc__content">
            {icon}
            <h2 className="smc__header font-neucha">{props.text}</h2>
          </div>
        </div>

        <div className="smc__overlay" style={{ backgroundColor: color }}>
          <h2 className="smc__overlay-text font-neucha">{props.msg}</h2>
        </div>
      </div>
    </a>
  );
};

export default SocalMediaCard;