import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAOsZENIiraadE__WL7IKOqb68o7biQHsE",
    authDomain: "social-media-project-1b07c.firebaseapp.com",
    projectId: "social-media-project-1b07c",
    storageBucket: "social-media-project-1b07c.appspot.com",
    messagingSenderId: "722564381016",
    appId: "1:722564381016:web:44998542082308e5a38d2d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default  db;