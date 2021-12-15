import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";

class RequestStore {
  constructor() {
    makeAutoObservable(this);
  }
  requests = [
    // detail:{}
  ];

  fetchRequset = async () => {
    try {
      const res = await instance.get("/requests");
      this.requests = res.data;
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // addRequest = async (option) => {
  //   try {
  //     const findRequest = this.request.find(
  //       (item) => item.option._id === option._id
  //     );
  //     if (findRequest) {
  //       findRequest.option = option;
  //     } else {
  //       const newRequest = {
  //         option: option,
  //       };
  //       this.items.push(newRequest);
  //     }
  //     console.log(newRequest);
  //   } catch (error) {
  //     // console.log("ShopStore -> fetchShops -> error", error);
  //   }
  // };
  addRequest = async (option) => {
    try {
      const findRequest = this.items.find(
        (item) => item.option._id === option._id
      );
      const newRequest = {
        option: option,
      };
      this.items.push(newRequest);
      const response = await instance.post("/request", newRequest);
      this.items.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  removeRequest = async (optionId) => {
    this.items = this.items.filter((item) => item.option._id !== optionId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  checkout = async () => {
    try {
      const cart = this.requests.map((request) => ({
        ...request, //another soultion remove line 82 keep 84
        request: request.option._id,
      }));
      // console.log(cart); //check
      const res = await instance.post("/requests/checkout", { requests: cart });
      this.requests = [];
      await AsyncStorage.removeItem("myCart");
      alert("Thank you for your trust");
    } catch (error) {
      console.log(error);
    }
  };

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total = total + item.quantity));
    return total;
  }
}

const requestStore = new RequestStore();

requestStore.fetchRequset();
export default requestStore;
