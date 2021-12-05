import axios from "axios";

// export const baseURL = "http://192.168.43.3:8080"; // Abdullah

export const baseURL = "http://192.168.3.14:8080"; // Shahad

// export const baseURL = "http://192.168.8.149:8080"; // Amnah

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
