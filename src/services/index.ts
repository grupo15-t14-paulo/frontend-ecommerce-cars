import axios from "axios";

export const api = axios.create({
  baseURL: "https://webmotors-gp15.onrender.com/",
  timeout: 10000,
});

export const apiHerokuApp = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 5000,
});
