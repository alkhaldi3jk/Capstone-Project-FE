import { makeAutoObservable } from "mobx";
import { instance } from "../stores/instance";

class UserStore {
  users = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchUsers = async () => {
    try {
      const res = await instance.get("/users");
      this.users = res.data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const userStore = new UserStore();
userStore.fetchUsers();
export default userStore;
