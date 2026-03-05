// Import Firebase modules
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq5YRqTJmjIxOHbcsBSudHAEjLxHpAwwc",
  authDomain: "ai-campus-assistant-638e4.firebaseapp.com",
  projectId: "ai-campus-assistant-638e4",
  storageBucket: "ai-campus-assistant-638e4.firebasestorage.app",
  messagingSenderId: "1035278424441",
  appId: "1:1035278424441:web:253fe1bfdcd2ddda9cf7a8",
  measurementId: "G-8W2DWBJJ2N"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Google provider
const provider = new GoogleAuthProvider();


// ==========================
// LOGIN FUNCTION
// ==========================

window.login = function(){

signInWithPopup(auth, provider)

.then((result)=>{

const user = result.user;

document.getElementById("user").innerHTML =
"Logged in as: " + user.displayName + " (" + user.email + ")";

})

.catch((error)=>{

console.error("Login Error:", error);

});

};



// ==========================
// LOGOUT FUNCTION
// ==========================

window.logout = function(){

signOut(auth)

.then(()=>{

document.getElementById("user").innerHTML =
"User logged out";

})

.catch((error)=>{

console.error("Logout Error:", error);

});

};



// ==========================
// AUTH STATE LISTENER
// ==========================

onAuthStateChanged(auth,(user)=>{

if(user){

document.getElementById("user").innerHTML =
"Welcome " + user.displayName;

}else{

document.getElementById("user").innerHTML =
"Not logged in";

}

});
