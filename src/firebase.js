import firebase from 'firebase'

// export var DB_CONFIG = {
//   apiKey: "AIzaSyBofjXvPh1LK8Wr9qTiLAqXTfWTZmdbT04",
//   authDomain: "todoreact-56ff5.firebaseapp.com",
//   databaseURL: "https://todoreact-56ff5.firebaseio.com",
//   projectId: "todoreact-56ff5",
//   storageBucket: "todoreact-56ff5.appspot.com",
//   messagingSenderId: "332461825229"
// };


const config = {
  apiKey: "AIzaSyBofjXvPh1LK8Wr9qTiLAqXTfWTZmdbT04",
  authDomain: "todoreact-56ff5.firebaseapp.com",
  databaseURL: "https://todoreact-56ff5.firebaseio.com",
  projectId: "todoreact-56ff5",
  storageBucket: "todoreact-56ff5.appspot.com",
  messagingSenderId: "332461825229"
};

firebase.initializeApp(config);
export default firebase
