import axios from "axios";

const authAxios = axios.create({
  baseURL: "/api", // Because Vite proxy will handle it
  headers: {
    "Content-Type": "application/json",
  },
});

export default authAxios;
