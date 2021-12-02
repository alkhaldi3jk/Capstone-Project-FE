import axios from "axios";

export const baseURL = "http://192.168.43.3:8005";



export const instance = axios.create({
    baseURL: `${baseURL}/api`,
  });