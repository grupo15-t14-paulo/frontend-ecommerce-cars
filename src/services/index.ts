import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 10000,
});

export const apiHerokuApp = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 5000,
});
