import firebase from "firebase";
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyAx1XMCM5ZLBqAQ1DD0lzfAK-bD-o4SE3M",
  authDomain: "ah-frontend-prime.firebaseapp.com",
  databaseURL: "https://ah-frontend-prime.firebaseio.com",
  projectId: "ah-frontend-prime",
  storageBucket: "ah-frontend-prime.appspot.com",
  messagingSenderId: "120292637629",
  appId: "1:120292637629:web:64a23730fa87975a"
};

firebase.initializeApp(config);

export default firebase;
