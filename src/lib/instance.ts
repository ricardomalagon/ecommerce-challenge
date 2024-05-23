import axios from "axios";

const instance = axios.create({
  baseURL: "/api/",
  timeout: 30000,
  headers: {
    ContentType: "application/json",
    Accept: "*",
  },
});

export default instance;
