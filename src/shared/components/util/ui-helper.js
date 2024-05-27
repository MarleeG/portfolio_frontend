import { randomColor } from "randomcolor";

export const randomColorGenerator = (lumin) => {
  const ranColor = randomColor({
    luminosity: lumin || "light",
    format: "rgba",
    alpha: 0.5, // e.g. 'rgba(9, 1, 107, 0.5)',
  });

  return ranColor;
};

export const paraPhrase = (text, max) => {
  if (text !== undefined) {
    let spaceMax = max || 15;
    const paragraph = text.split(" ");

    if (paragraph.length <= spaceMax) {
      return text;
    }

    let paraPhrase = [];
    for (let i = 0; i < spaceMax; i++) {
      paraPhrase.push(paragraph[i]);
    }
    const updatedParaPhrase = paraPhrase.join(" ") + "...";
    return updatedParaPhrase;
  }
};

export const borderColorGenerator = () => {
  const palette = [
    "27296D",
    "#74ebfe",
    "#c3f5f5",
    "#8aaec8",
    "#aae0c6",
    "#fcdef7",
    "#dd7373",
    "#ead94c",
    "#edffd9",
    "#ff784f",
  ];

  const randNum = Math.floor(Math.random() * palette.length - 1) + 1;

  const color = palette[randNum];

  return { backgroundColor: color };
};

export const backgroundGradient = () => {
  const palette = [
    ["rgb(238,156,167)", "#ffdde1"],
    ["#2193b0", "#6dd5ed"],
    ["#C6FFDD", "#FBD786", "#f7797d"],
    ["#12c2e9", "#c471ed", "#f7797d"],
    ["#2980B9", "#6DD5FA", "#FFFFFF"],
    ["#f4c4f3", "#fc67fa"],
    ["#00c3ff", "#ffff1c"],
  ];

  const randNum = Math.floor(Math.random() * palette.length - 1) + 1;

  const backgroundTwo = palette[randNum].join(", ");

  const styles = {
    background: `linear-gradient(90deg, ${backgroundTwo})`,
  };
  return styles;
};
