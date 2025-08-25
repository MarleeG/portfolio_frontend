import React, { Fragment, useState, useEffect, useCallback } from "react";
import Alert from "react-bootstrap/Alert";

import MyCard from "../components/my-card";
import Modal from "../../shared/components/UIElements/Modal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import API from "../../util/API";

import "./Portfolio.css";


let projects = [];
const Portfolio = (props) => {
  
  const [allProjects, setAllProjects] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [currentProject, setCurrentProject] = useState({});
  const [s3ImageURLs, setS3ImageURLs] = useState([]);

  const handleModalOpen = () => {
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  const getProjectById = (id) => {
    let getAProject = allProjects.filter((pro) => pro._id === id);
    setCurrentProject(getAProject[0]);
  };

  const getProjects = useCallback(() => {
    API.getAllProjects()
      .then((response) => {
        let pro = response.data.projects;
        projects = pro;
        return projects;
      })
      .then(() => {
        setAllProjects(projects);
      })
      .catch((err) => {
        return;
      });
  }, []);

  const getImagesFromS3 = useCallback(() => {
    API.getAllProjectImageS3Urls()
      .then((response) => {
        setS3ImageURLs(response.data.imageUrls);
      })
      .catch((err) => {
        return;
      });
  }, []);

  useEffect(() => {
    getProjects();
    getImagesFromS3();

  }, [getProjects, getImagesFromS3]);

  return (
    <Fragment>
      {allProjects.length === 0 && (
        <div className="page center">
          <LoadingSpinner />
        </div>
      )}

      {currentProject && (
        <Modal
          show={modalShow}
          onHide={handleModalClose}
          project={currentProject}
        />
      )}

      <div className="page center portfolio__container">
        
        <div className="portfolio__wrapper center">
          {/* Project column */}
          <div className="portfolio__right portfolio__column">
            <div className="portfolio__wrapper-right">
            {
              allProjects.length > 0 && 
              <Alert className="center animated fadeInRightBig slow-2s" variant="light">Several projects were originally deployed on Heroku. Due to recent platform changes, some live demos may not load, but all source code is available on GitHub.</Alert>
            }
              {/* This renders projects */}
              <div className="portfolio__projects-list">
              
                {/* Projects will be listed here */}
                {allProjects.length > 0 &&
                  allProjects.map((project) => {
                    return (
                      <MyCard
                        key={project._id}
                        id={project._id}
                        data={project}
                        handleModalOpen={handleModalOpen}
                        getProjectById={getProjectById}
                        s3Images={s3ImageURLs}
                        projectMessage={project.projectMessage}
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

export default Portfolio;