import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "../stores/instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as ImagePicker from "expo-image-picker";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  checkForToken = async () => {
    try {
      this.user = null;
      const token = await AsyncStorage.getItem("myToken");
      if (token) {
        const currentTime = Date.now(); // give us the current time
        let tempUser = decode(token);
        if (tempUser.exp >= currentTime) {
          this.setUser(token);
        } else {
          this.signOut();
        }
      }
    } catch (error) {}
  };

  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      this.user = decode(token);
      //   console.log(this.user);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error) {}
  };
  signup = async (userData, navigation, toast) => {
    try {
      const response = await instance.post("/signup", userData);
      this.setUser(response.data.token);
      navigation.navigate("ServiceList");
      // navigation.replace("Home");
    } catch (error) {
      console.log(error);
    }
  };

  signOut = async (navigation) => {
    try {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("myToken");
      this.user = null;
      navigation.navigate("Signin");
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (user, navigation, toast) => {
    try {
      const response = await instance.post("/signin", user);
      this.setUser(response.data.token);
      navigation.navigate("ServiceList");
      // if (!this.user) {
      //   toast.show({
      //     title: "Welcome",
      //     status: "Success",
      //     //   description: "wrong username/password combination",
      //   });
      // }
      // navigation.replace("Home");
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  updateProfile = async (updatedProfile, userId) => {
    try {
      const formData = new FormData();

      for (const key in updated) {
        // console.log(key)
        formData.append(key, updatedProfile[key]);
      }
      const res = await instance.put(`/user`, formData);
      this.user = this.user.profile.map((profile) =>
        user._id === userId ? res.data : profile
      );
    } catch (error) {
      console.log("Stores -> updateProfile -> error", error);
    }
  };
}
const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
