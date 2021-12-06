import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class Stores {
    profiles = [];
    isLoading = true;
  
    constructor() {
      makeAutoObservable(this);
    }

 updateProfile = async (updatedProfile, profileId) => {
    try {
      const formData = new FormData();

      for(const key in updated){
        // console.log(key)
        formData.append(key, updatedProfile[key])
      }
      const res = await instance.put(`/trip/${profileId}`, formData);
      this.profiles = this.profiles.map((profile) =>
        profile._id === profileId ? res.data : trip
      );
    } catch (error) {
      console.log("Stores -> updateProfile -> error", error);
    }
  }
}
//   const store = new Stores();
// Stores.fetchProfiles()

export default Stores;