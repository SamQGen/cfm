import { defineStore } from "pinia";
import axios from "axios";
import router from "~/router";
export const useSettings = defineStore("settings", {
  state: () => ({
    allowMobile: true,
    allowPassport: true,
    allowPictureUpload: true,
    allowIDCard: true,
    allowDrivingLicense: true,
    user: null,
  }),
  getters: {
    //     allowMobile: (state) => state.allowMobile,
    //     allowPassport: (state) => state.allowPassport,
    //     allowPictureUpload: (state) => state.allowPictureUpload,
    //     allowIDCard: (state) => state.allowIDCard
  },
  actions: {
    // any amount of arguments, return a promise or not
    getRouteSettings() {
      console.log("getRouteSettings", router);
    },
    getSettings(query) {
      axios
        .get("https://run.mocky.io/v3/09c742ce-edcf-413e-a91e-213d136b66de")
        .then((response) => {
          console.log("this is the query ", query);
          if (query) {
            let x = response.data.users.find((user) => user.name === query);
            this.user = query;
            this.allowMobile = x.allowMobile;
            this.allowPassport = x.allowPassport;
            this.allowPictureUpload = x.allowPictureUpload;
            this.allowIDCard = x.allowIDCard;
            this.allowDrivingLicense = x.allowDrivingLicense;
          }
        });
    },
  },
});
