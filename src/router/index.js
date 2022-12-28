import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import SelectDocumentView from "~/views/SelectDocumentView.vue";
import UploadPassportView from "~/views/UploadPassportView.vue";
import IdCardView from "~/views/IdCardView.vue";
import DrivingLicenseView from "~/views/DrivingLicenseView.vue";
import SmartPhoneMessageView from "~/views/SmartPhoneMessageView.vue";
import UploadImageView from "~/views/UploadImageView.vue";
import UploadSelfieView from "~/views/UploadSelfieView.vue";
import ViewCapturedImageView from "~/views/ViewCapturedImageView.vue";
import VerificationView from "~/views/VerificationView.vue";
import InstructionsView from "~/views/InstructionsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: InstructionsView,
    },
    {
      path: "/select-document",
      name: "select-document",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SelectDocumentView,
    },
    {
      path: "/upload-passport",
      name: "upload-passport",
      component: UploadPassportView,
    },
    {
      path: "/upload-id",
      name: "upload-id",
      component: IdCardView,
    },
    {
      path: "/upload-driving-license",
      name: "upload-dl",
      component: DrivingLicenseView,
    },
    {
      path: "/continue-on-smartphone",
      name: "continue-on-smartphone",
      component: SmartPhoneMessageView,
    },
    {
      path: "/upload-file",
      name: "upload-image",
      component: UploadImageView,
    },
    {
      path: "/upload-selfie",
      name: "upload-selfie",
      component: UploadSelfieView,
    },
    {
      path: "/captured-image",
      name: "captured-image",
      component: ViewCapturedImageView,
    },
    {
      path: "/verification-view",
      name: "verification-view",
      component: VerificationView,
    },
  ],
});

export default router;
