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

  fetchOption = async () => {
    try {
      const res = await instance.get("/options");
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  addRequest = async (option) => {
    try {
      const findRequest = this.request.find(
        (item) => item.option._id === option._id
      );
      if (findRequest) {
        findRequest.option = option;
      } else {
        const newRequest = {
          option: option,
        };
        this.items.push(newRequest);
      }
      console.log(newRequest);
    } catch (error) {
      // console.log("ShopStore -> fetchShops -> error", error);
    }
  };

  removeRequest = async (optionId) => {
    this.items = this.items.filter((item) => item.option._id !== optionId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  checkout = async () => {
    try {
      const cart = this.items.map((item) => ({
        ...item, //another soultion remove line 82 keep 84
        option: item.option._id,
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

const requestStore = new RequestStore();

requestStore.fetchOption();
export default requestStore;
