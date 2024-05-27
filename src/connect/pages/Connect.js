import React, { useState, useEffect, Fragment, useCallback } from "react";

import SocialMediaCard from "../components/social-media-card";
import { getAllImages } from "../components/util/images";

import "./Connect.css";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import API from "../../util/API";

const Connect = () => {
  const [socialInfo, setSocialInfo] = useState([]);

  const getAllS3Icons = useCallback(() => {
    API.getAllConnectIconImageS3Urls()
      .then((res) => {
        let socialMediaIconImages = getAllImages(res.data.imageUrls);
        setSocialInfo(socialMediaIconImages);
      })
      .catch((err) => {
        console.error(err);
        return;
      });
  }, []);

  useEffect(() => {
    getAllS3Icons();

  }, [getAllS3Icons]);

  return (
    <Fragment>
      {socialInfo.length === 0 && (
        <div className="page center">
          <LoadingSpinner />
        </div>
      )}
      <div className="page center contact__container">
        <div className="contact__wrapper center">

          {/* Project column */}
          <div className="contact__main contact__column">
            {/* This renders projects */}
            <div className="contact__personal-info">
              <h1 className="font-neucha">Let's Connect!</h1>

              <div className="contact__social-links">
                {socialInfo.map((icon) => {
                  let text = icon.title;
                  let alt = icon.alt;
                  let src = icon.src;
                  let link = icon.link;
                  let msg = icon.msg;

                  let iconImg = () => {
                    return <img src={src} alt={alt} />;
                  };

                  return (
                    <SocialMediaCard
                      key={icon.id}
                      link={link}
                      text={text}
                      img={iconImg}
                      msg={msg}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Connect;