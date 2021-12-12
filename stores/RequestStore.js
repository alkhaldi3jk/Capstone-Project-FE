import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";

class RequestStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [
    // detail:{}
  ];

  addRequest = async (detail) => {
    try {
      const findRequest = this.request.find(
        (item) => item.detail._id === detail._id
      );
      if (findRequest) {
        findRequest.detail = detail;
      } else {
        const newRequest = {
          detail: detail,
        };
        this.items.push(newRequest);
      }
      console.log(newRequest);
    } catch (error) {
      console.log(error);
    }
  };

  removeRequest = async (detailId) => {
    this.items = this.items.filter((item) => item.detail._id !== detailId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  checkout = async () => {
    try {
      const cart = this.items.map((item) => ({
        ...item, //another soultion remove line 82 keep 84
        detail: item.detail._id,
      }));
      // console.log(cart); //check
      const res = await instance.post("/checkout", { items: cart });
      this.items = [];
      alert("I'm a cute message");
      await AsyncStorage.removeItem("myCart");
      alert("Thank you for your trust");
    } catch (error) {
      console.log(error);
    }
  };
}

const serviceStore = new RequestStore();

export default serviceStore;
