# 🔐 FireAuth - Simple User Authentication System Using Firebase

A beginner-friendly user authentication system built with Firebase, featuring a clean dark theme and responsive design.

## ⚠️ Important Security Note
For security reasons, sensitive configuration files are not included in this repository. You will need to:
1. Add your own Firebase configuration values
2. Never commit your actual Firebase configuration to GitHub

## 📱 Live Demo
Check out the live demo: [FireAuth Demo](https://fireauth-dharmeshx.web.app)

## ✨ Features
- 📝 User Registration with Email & Password
- 🔑 User Login
- 🎯 Protected Dashboard
- 🌙 Modern Dark Theme
- 📱 Mobile Responsive Design
- ⚡ Real-time Authentication Status
- 🕒 Last Login Tracking
- 🔒 Security Status

## 🛠️ Technologies Used
- HTML5
- Tailwind CSS (for styling)
- JavaScript (Vanilla)
- Firebase (Authentication)

## 🚀 Getting Started

### Prerequisites
1. Create a [Firebase](https://firebase.google.com/) account
2. Install [Node.js](https://nodejs.org/) (needed for Firebase tools)
3. Basic understanding of HTML, CSS, and JavaScript

### Step-by-Step Setup Guide

1. **Clone this repository**
   ```bash
   git clone https://github.com/DharmeshX/fireAuth.git
   cd fireAuth
   ```

2. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project" or select an existing project
   - Give your project a name (e.g., "FireAuth")
   - Enable Google Analytics (optional)
   - Click "Create project"

3. **Add Firebase to your web app**
   - In Firebase Console, click the web icon (</>)
   - Register your app with a nickname (e.g., "fireauth")
   - Copy the Firebase configuration object
   - Replace the configuration in `js/firebase-config.js` with your copied config:
     ```javascript
     const firebaseConfig = {
         apiKey: "YOUR_API_KEY",
         authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
         projectId: "YOUR_PROJECT_ID",
         storageBucket: "YOUR_PROJECT_ID.appspot.com",
         messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
         appId: "YOUR_APP_ID"
     };
     ```

4. **Enable Email/Password Authentication**
   - In Firebase Console, go to Authentication
   - Click "Get Started"
   - Enable "Email/Password" sign-in method
   - Click "Save"

5. **Install Firebase Tools**
   ```bash
   npm install -g firebase-tools
   ```

6. **Login to Firebase**
   ```bash
   firebase login
   ```

7. **Initialize Firebase in your project**
   ```bash
   firebase init
   ```
   - Select "Hosting"
   - Choose your project
   - Set "." as your public directory
   - Don't configure as a single-page app
   - Don't overwrite existing files

8. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

## 📂 Project Structure
```
fireAuth/
├── index.html          # Login page
├── signup.html         # Registration page
├── dashboard.html      # Protected dashboard
├── js/
│   ├── firebase-config.js  # Firebase configuration
│   ├── auth.js            # Authentication logic
│   └── dashboard.js       # Dashboard functionality
├── .firebaserc        # Firebase project settings
└── firebase.json      # Firebase hosting settings
```

## 🎨 Features Explained

### Login Page (index.html)
- Clean login form with email and password fields
- Error handling and display
- Link to registration page
- Automatic redirect to dashboard if already logged in

### Sign Up Page (signup.html)
- Registration form with name, email, and password
- Password confirmation
- Error handling and display
- Link to login page
- Automatic redirect to dashboard upon successful registration

### Dashboard (dashboard.html)
- Protected route (only accessible when logged in)
- Displays user information
- Shows account creation date
- Tracks last login time
- Security status indicator
- Logout functionality

## 🔧 Customization

### Changing Colors
The project uses Tailwind CSS classes for styling. To change colors:
- For background: Change `bg-gray-900` classes
- For text: Change `text-white`, `text-gray-300` classes
- For buttons: Change `bg-indigo-600` classes

### Adding Features
The modular structure makes it easy to add new features:
1. Add new HTML elements to the relevant page
2. Add corresponding JavaScript in the js folder
3. Use Firebase services as needed

## 📝 Common Issues & Solutions

1. **Firebase Configuration Error**
   - Make sure your config in `firebase-config.js` is correct
   - Check if you've enabled Email/Password authentication

2. **Deployment Issues**
   - Run `firebase deploy --only hosting`
   - Check if all files are in the correct directory

3. **Page Not Found**
   - Make sure to include `.html` in URLs
   - Verify file names match exactly

## 🤝 Contributing
Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions:
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📄 License
This project is open source and available under the MIT License.

## 🙏 Acknowledgments
- Firebase team for the excellent authentication service
- Tailwind CSS team for the styling framework

## 📧 Contact
For questions or feedback, please open an issue in the GitHub repository.

---
Made with ❤️ by DharmeshX 
