import axios from "axios";

const API_HOST = "https://portfolio-backend-xnepoa.fly.dev";
// const API_HOST = "http://localhost:8080";

const API = {
  getAllProjects: () => {
    return axios.get(`${API_HOST}/api/project/all`);
  },
  getProjectById: (id) => {
    return axios.get(`${API_HOST}/api/project/${id}`);
  },
  getAllProjectImageS3Urls: () => {
    return axios.get(`${API_HOST}/api/project/images`);
  },
  getAllConnectIconImageS3Urls: () => {
    return axios.get(`${API_HOST}/api/project/connect/images`)
  }
};

export default API;
