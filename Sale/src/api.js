import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const FOODAPI = axios.create({
  baseURL: "http://localhost:3000",
});

export { API, FOODAPI };
