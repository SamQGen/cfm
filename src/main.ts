import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/index.js";

import "./assets/main.scss";

// import './styles/element/index.scss'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import 'element-plus/theme-chalk/display.css'
// import "./styles/element/index.scss";
import 'uno.css'

const app = createApp(App);

app.use(createPinia());
// app.use(ElementPlus)
app.use(router);

app.mount("#app");
