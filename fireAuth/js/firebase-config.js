// ====================================
// Firebase Configuration
// ====================================

// This configuration connects your app to your Firebase project
// You get these values from the Firebase Console when you create a web app
// IMPORTANT: Replace these values with your own Firebase config values
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase with your configuration
// This sets up the connection to Firebase services
firebase.initializeApp(firebaseConfig);

// Get the Authentication service
// This is what we'll use for login, signup, and logout
const auth = firebase.auth(); 