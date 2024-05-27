import axios from "axios";

const API_URL = 'http://ec2-3-80-114-117.compute-1.amazonaws.com:8080';

const API = {
  getAllProjects: () => {
    return axios.get(`${API_URL}/api/project/all`);
  },
  getProjectById: (id) => {
    return axios.get(`${API_URL}/api/project/${id}`);
  },
  getAllProjectImageS3Urls: () => {
    return axios.get(`${API_URL}/api/project/images`);
  },
  getAllConnectIconImageS3Urls: () => {
    return axios.get(`${API_URL}/api/project/connect/images`)
  }
};

export default API;
