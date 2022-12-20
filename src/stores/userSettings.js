import { defineStore } from 'pinia'
import axios from 'axios'
export const useSettings = defineStore('settings', {
    state: () => ({
        "allowMobile": false,
        "allowPassport": false,
        "allowPictureUpload": false,
        "allowIDCard": false
    }),
    getters: {
    //     allowMobile: (state) => state.allowMobile,
    //     allowPassport: (state) => state.allowPassport,
    //     allowPictureUpload: (state) => state.allowPictureUpload,
    //     allowIDCard: (state) => state.allowIDCard

    },
    actions: {
        // any amount of arguments, return a promise or not
        getSettings() {
            axios.get('https://run.mocky.io/v3/7a510deb-2e89-4be6-85e0-e3c388d50c1b').then(
                (response) => {
                    console.log('this is the response  ' , response.data)
                    this.allowMobile = response.data.allowMobile
                    this.allowPassport = response.data.allowPassport
                    this.allowPictureUpload = response.data.allowPictureUpload
                    this.allowIDCard = response.data.allowIDCard
                }
            )
        }
    },
})
