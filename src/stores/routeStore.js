import { defineStore } from "pinia";
export const useRouteStore = defineStore("route", {
  state: () => ({
    route: null,
  }),
  getters: {},
  actions: {
    setRoute(route) {
      this.route = route;
    },
  },
});
