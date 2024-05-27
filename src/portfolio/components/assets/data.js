/**
 * 
 * @param {string} imgName 
 * @param {array} s3ImageURLs
 * @return {array}
 */
const getImageByName = (imgName, s3ImageURLs) => {

  let image = s3ImageURLs.find((url) => url.includes(imgName));
  image = [{src: image, imgName}];
  // if image is undefined use default image
  if (!image) {
    // defaultIMG
    const defaultImage = s3ImageURLs.find((url) => url.includes('defaultIMG'));

    image = [{ src: defaultImage }];
  }
  return image;
};

export default getImageByName;
