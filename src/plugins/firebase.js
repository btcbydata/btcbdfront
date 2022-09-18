import Vue from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/database'
import firebaseConfig from '../../firebaseConfig.js'


firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase