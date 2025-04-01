import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://email.mji.imperial-net.com",
  headers: {
    "Content-Type": "application/json",
  },
});


export default apiClient;
