// api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://plumbtechserver.onrender.com",
  withCredentials: true,
});

export default API;