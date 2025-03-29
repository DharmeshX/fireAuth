// ====================================
// Firebase Authentication Handler
// ====================================

// Wait for the HTML document to be fully loaded before running any code
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page name (e.g., 'index.html', 'signup.html', etc.)
    const currentPage = window.location.pathname.split('/').pop();

    // ====================================
    // Authentication State Observer
    // ====================================
    // This watches for changes in the user's login status
    // It runs when:
    // 1. The page loads
    // 2. The user logs in
    // 3. The user logs out
    auth.onAuthStateChanged(user => {
        if (user) {
            // User is signed in
            // If they're on login or signup page, redirect them to dashboard
            if (currentPage === 'index.html' || currentPage === 'signup.html') {
                window.location.href = 'dashboard.html';
            }
        } else {
            // No user is signed in
            // If they try to access dashboard without being logged in, redirect to login
            if (currentPage === 'dashboard.html') {
                window.location.href = 'index.html';
            }
        }
    });

    // ====================================
    // Login Form Handler
    // ====================================
    if (currentPage === 'index.html') {
        // Get references to the HTML elements we need
        const loginForm = document.getElementById('loginForm');
        const errorMessage = document.getElementById('errorMessage');

        // Listen for form submission
        loginForm.addEventListener('submit', async (e) => {
            // Prevent the form from actually submitting (which would refresh the page)
            e.preventDefault();
            
            // Get the values the user typed in
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                // Try to sign in with Firebase
                // This returns a promise, so we use 'await' to wait for it to complete
                await auth.signInWithEmailAndPassword(email, password);
                // If successful, redirect to dashboard
                window.location.href = 'dashboard.html';
            } catch (error) {
                // If there's an error (wrong password, invalid email, etc.)
                // Show it to the user
                errorMessage.textContent = error.message;
                errorMessage.classList.remove('hidden');
            }
        });
    }

    // ====================================
    // Signup Form Handler
    // ====================================
    if (currentPage === 'signup.html') {
        // Get references to the HTML elements we need
        const signupForm = document.getElementById('signupForm');
        const errorMessage = document.getElementById('errorMessage');

        // Listen for form submission
        signupForm.addEventListener('submit', async (e) => {
            // Prevent the form from actually submitting
            e.preventDefault();
            
            // Get all the values the user typed in
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const name = document.getElementById('name').value;

            // Check if passwords match
            if (password !== confirmPassword) {
                errorMessage.textContent = 'Passwords do not match';
                errorMessage.classList.remove('hidden');
                return; // Stop the function here if passwords don't match
            }

            try {
                // Try to create a new account with Firebase
                const userCredential = await auth.createUserWithEmailAndPassword(email, password);
                
                // Add the user's name to their profile
                await userCredential.user.updateProfile({
                    displayName: name
                });

                // If successful, redirect to dashboard
                window.location.href = 'dashboard.html';
            } catch (error) {
                // If there's an error (email already in use, weak password, etc.)
                // Show it to the user
                errorMessage.textContent = error.message;
                errorMessage.classList.remove('hidden');
            }
        });
    }
}); 