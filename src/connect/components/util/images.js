const images = [
  {
    id: 0,
    title: "Github",
    alt: "Github",
    link: "https://github.com/MarleeG",
    msg: 'My projects'
  },
  {
    id: 1,
    title: "LinkedIn",
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/marlee-gerard/",
    msg: "Let's connect!"
  },
  {
    id: 2,
    title: "Twitter",
    alt: "Twitter",
    link: "https://twitter.com/GerardMarlee",
    msg: 'Follow me!'
  },
  {
    id: 3,
    title: "Résumé",
    alt: "Résumé",
    link: "https://docs.google.com/document/d/1BEjgQtR7x0zxiT6J7TH_22Q_suyh5sSZH-SyViszZxI/edit?usp=sharing",
    msg: 'View résumé'
  },
];

/**
 * Choose best icon URL based on theme.
 * @param {string[]} s3ImageURLs
 * @param {boolean} isDark
 */
const addImageSrc = (s3ImageURLs, isDark) => {
  const findIcon = (base) => {
    // explicit -dark/-light variants
    if (isDark) {
      const dark = s3ImageURLs.find((u) => u.includes(`${base}-dark`));
      if (dark) return dark;
    } else {
      const light = s3ImageURLs.find((u) => u.includes(`${base}-light`));
      if (light) return light;
    }
    // Fallback to plain base match
    return s3ImageURLs.find((u) => u.includes(base));
  };

  images.forEach((iconImage) => {
    const altLower = iconImage.alt.toLowerCase();
    if (altLower.includes('résumé') || altLower.includes('resume')) {
      // Resume now uses 'doc-icon' with -dark / -light variants
      iconImage.src = findIcon('doc-icon');
      return;
    }
    // github/linkedin/twitter
    const base = altLower;
    iconImage.src = findIcon(base);
  });
};

/**
 * Adding S3 image url
 * @param {array} s3ImageURLs 
 * @return {array}
 */
export const getAllImages = (s3ImageURLs, isDark = false) => {
  addImageSrc(s3ImageURLs, isDark);
  // Return a fresh array with cloned objects so React sees changes
  return images.map((img) => ({ ...img }));
}
