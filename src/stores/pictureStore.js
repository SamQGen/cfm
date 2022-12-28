import { defineStore } from 'pinia'
import router   from "~/router";
import Camera from "easy-js-camera";
export const usePictureStore = defineStore('picture', {
    state: () => ({
        picture: null,
        camera: null,
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
        setCamera(video,canvas){
            Camera
                .tryInvokePermission(video,canvas)
                .then(camera => {
                    this.camera = camera
                    camera.start()
                    console.log('camera started')
                    this.isLoaded = true;
                })
                .catch(error => {
                    // Mostly happens if the user blocks the camera or the media devices are not supported
                });
        },
        stopCamera(){
            this.camera.stop()
            this.camera = null;
        },
        takePicture(){
            this.camera.snapAsBlob().then(photo => {
                console.log('this is the photo' , photo)
                this.picture = photo;
                // router.push({name:'captured-image'})
            })
        }
    },
})
