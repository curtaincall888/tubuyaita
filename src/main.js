import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)
import { firestorePlugin } from "vuefire";
import firebase from "firebase";
import "firebase/firestore";

Vue.use(firestorePlugin);

firebase.initializeApp({
  apiKey: "AIzaSyBG8biSkvrFD3IdGhskjMlU_SDVQLBRGQs",
  authDomain: "tubuyaita-55e28.firebaseapp.com",
  databaseURL: "https://tubuyaita-55e28.firebaseio.com",
  projectId: "tubuyaita-55e28",
  storageBucket: "tubuyaita-55e28.appspot.com",
  messagingSenderId: "151449870416",
  appId: "1:151449870416:web:1dbbddf39e187b39177155",
});

export const db = firebase.firestore();
export const auth = firebase.auth();
Vue.component('fa', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
