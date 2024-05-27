import axios from "axios";
const API = {
  getAllProjects: () => {
    return axios.get('/api/project/all');
  },
  getProjectById: (id) => {
    return axios.get(`/api/project/${id}`);
  },
  getAllProjectImageS3Urls: () => {
    return axios.get('/api/project/images');
  },
  getAllConnectIconImageS3Urls: () => {
    return axios.get('/api/project/connect/images')
  }
};

export default API;
