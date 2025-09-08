import React, { useState, useEffect, useContext, useMemo } from "react";
import { randomColor } from "randomcolor";
import { ThemeContext } from "../../context/theme-context";

import "./social-media-card.css";

const SocalMediaCard = (props) => {
  const [color, setColor] = useState("#74ebd5");
  const { isDark } = useContext(ThemeContext);
  const canHover = useMemo(() => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches, []);
  let icon = props.img();

  const randomColorGenerator = () => {
    const baseOpts = isDark
      ? { luminosity: "bright", format: "rgba", alpha: 0.35 }
      : { luminosity: "light", format: "rgba", alpha: 0.5 };
    try {
      const ranColor = randomColor(baseOpts);
      setColor(ranColor);
    } catch (_) {
      // Fallback color
      setColor(isDark ? "rgba(59,130,246,0.35)" : "rgba(116,235,213,0.5)");
    }
  };

  useEffect(() => {
    // In dark && desktop, we use CSS overlay like portfolio
    // otherwise keep colorful overlay
    if (!isDark || !canHover) {
      randomColorGenerator();
    }
  }, [isDark, canHover]);

  const onEnter = () => {
    if (!isDark && canHover) randomColorGenerator();
  };

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div className="smc__container center" onMouseEnter={onEnter}>
        <div className="smc__wrapper">
          <div className="smc__content">
            {icon}
            <h2 className="smc__header font-neucha">{props.text}</h2>
          </div>
        </div>

        { /* In dark theme on desktop, use CSS-driven overlay color to match portfolio */ }
        <div
          className="smc__overlay"
          style={isDark && canHover ? undefined : { backgroundColor: color }}
        >
          <h2 className="smc__overlay-text font-neucha">{props.msg}</h2>
        </div>
      </div>
    </a>
  );
};

export default SocalMediaCard;
