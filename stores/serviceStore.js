import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ServiceStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  services = [];
  loading = true;

  fetchList = async () => {
    try {
      const response = await instance.get("/");
      console.log(response.data);
      this.services = response.data;
      console.log("hi" + this.services);

      this.loading = false;
    } catch (error) {
      console.log("serviceStore -> fetchList -> error", error);
    }
  };

  //   createService = async (newService, navigation) => {
  //     try {
  //       const response = await instance.post("/service", newService);
  //       navigation.navigate("CreateService");
  //       this.services.push(response.data);
  //       //this.loading = false;
  //     } catch (error) {
  //       console.log("serviceStore -> createService -> error", error);
  //     }
  //   };
}

const serviceStore = new ServiceStore();
serviceStore.fetchList();

export default serviceStore;
