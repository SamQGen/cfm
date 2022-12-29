import { defineStore } from "pinia";
export const useRouteStore = defineStore("route", {
  state: () => ({
    route: null,
    type: null,
  }),
  getters: {
    getRoute: (state) => state.route,
    getType: (state) => state.type,
  },
  actions: {
    setRoute(route) {
      this.route = route;
    },
    setType(type) {
      this.type = type;
    },
  },
});
