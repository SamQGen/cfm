import { defineStore } from 'pinia'
import router   from "~/router";
export const usePictureStore = defineStore('picture', {
    state: () => ({
        picture: null,
    }),
    getters: {
        //     allowMobile: (state) => state.allowMobile,
        //     allowPassport: (state) => state.allowPassport,
        //     allowPictureUpload: (state) => state.allowPictureUpload,
        //     allowIDCard: (state) => state.allowIDCard

    },
    actions: {
        // any amount of arguments, return a promise or not
        setPicture(picture) {
            this.picture = picture;
        },
    },
})
