import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const loginUser = (data) => API.post("/login",data);
export const registerUser = (data) => API.post("/register",data);
export const getTemples = () => API.get("/temples");
export const bookDarshan = (data) => API.post("/darshan",data);