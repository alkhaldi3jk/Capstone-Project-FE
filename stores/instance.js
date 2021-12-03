import axios from "axios";

// export const baseURL = "http://192.168.43.3:8005"; // Abdullah

export const baseURL = "http://192.168.3.14:8080"; // Shahad

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
