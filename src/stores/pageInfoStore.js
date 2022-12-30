import { defineStore } from "pinia";
export const usePageInfoStore = defineStore("pageInfo", {
  state: () => ({
    subtitle: null,
  }),
  getters: {},
  actions: {
    setSubtitle(subtitle) {
      // the picture will be captured automatically
      this.subtitle = subtitle;
    },
  },
});
