import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD1f0tYlOceGqKY_mFTu22HfehxwfREExA",
    authDomain: "auth-87d22.firebaseapp.com",
    projectId: "auth-87d22",
    storageBucket: "auth-87d22.appspot.com",
    messagingSenderId: "823617237939",
    appId: "1:823617237939:web:1b4631aad806e44a5711c6"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;

    //   const profilePic = result.user.photoURL;
    //   use local storage if you want.

    //   localStorage.setItem("name", name);
    //   localStorage.setItem("email", email);
    //   localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
}

//The below is sign out function call it wherever necessary "onClick:signOut".
function signOut() {
    gapi.auth2.getAuthInstance().signOut().then(function() {
      console.log('user signed out')
    })
  }
