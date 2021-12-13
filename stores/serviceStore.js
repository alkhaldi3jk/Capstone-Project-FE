import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ServiceStore {
  constructor() {
    makeAutoObservable(this);
  }
  services = [];
  loading = true;

  fetchList = async () => {
    try {
      const response = await instance.get("/services");
      this.services = response.data;

      this.loading = false;
    } catch (error) {
      console.log("serviceStore -> fetchList -> error", error);
    }
  };
}

const serviceStore = new ServiceStore();
serviceStore.fetchList();

export default serviceStore;
