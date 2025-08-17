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
    link: "https://www.linkedin.com/in/marlee-g-b27505ab/",
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
 * Adding src property to all images objects in images array
 * @param {array} s3ImageURLs
 */
const addImageSrc = (s3ImageURLs) => {
  images.forEach((iconImage) => {
    const alternateIconName = iconImage.alt.toLowerCase();
    const altResumeIconName = images[3].alt.toLowerCase();

    if(alternateIconName !== altResumeIconName){
      iconImage.src = s3ImageURLs.find((url) => url.includes(alternateIconName));
    }else{
      // only for resume icon
      iconImage.src = s3ImageURLs.find((url) => url.includes('doc-icon'));
    }
  });
}

/**
 * Adding S3 image url
 * @param {array} s3ImageURLs 
 * @return {array}
 */
export const getAllImages = (s3ImageURLs) => {
  addImageSrc(s3ImageURLs);
  return images;
}