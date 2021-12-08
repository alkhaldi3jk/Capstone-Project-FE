import { makeAutoObservable } from 'mobx';
import React from 'react'
import { instance } from './instance';

class ProfileStore {

    profiles = [];
    isLoading = true;

   constructor() {
       makeAutoObservable(this);
   }

   updateProfile =  async (updatedProfile, profileId) => {
       try {
           const formData = new FormData();

           for (const key in updatedProfile) {
               formData.append(key, updatedProfile[key]);
           }
           const res = await instance.put(`/profile/${profileId}`, formData);
           console.log(res.data);
           this.profiles = this.profiles.map((profile) =>
           profile._id === profileId ? res.data : profile       
           );
   } catch (error) {
       console.log("profileStore -> updateProfile -> error", error);
   }
};

}

const profileStore = new ProfileStore();

export default profileStore;
