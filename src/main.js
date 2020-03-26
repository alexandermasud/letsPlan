import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyAdMviRMVEMfrPLBJhpVb_dOLEjWS1CCtg",
  authDomain: "letsplan-db6bc.firebaseapp.com",
  databaseURL: "https://letsplan-db6bc.firebaseio.com",
  projectId: "letsplan-db6bc",
  storageBucket: "letsplan-db6bc.appspot.com",
  messagingSenderId: "409869151092",
  appId: "1:409869151092:web:f0492c6b4560e518c2da21",
  measurementId: "G-DRXGVDGNZS"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
