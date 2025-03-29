// ====================================
// Dashboard Page Handler
// ====================================

// Wait for the HTML document to be fully loaded before running any code
document.addEventListener('DOMContentLoaded', () => {
    // Get references to all the HTML elements we need to update
    const userEmail = document.getElementById('userEmail');
    const profileEmail = document.getElementById('profileEmail');
    const accountCreated = document.getElementById('accountCreated');
    const lastLogin = document.getElementById('lastLogin');
    const logoutBtn = document.getElementById('logoutBtn');

    // ====================================
    // Authentication State Observer
    // ====================================
    // This watches for changes in the user's login status
    auth.onAuthStateChanged(user => {
        if (user) {
            // User is logged in, show their information
            
            // Display email in the navigation bar and profile section
            userEmail.textContent = user.email;
            profileEmail.textContent = user.email;
            
            // Show when the account was created
            // Convert the timestamp to a readable date
            accountCreated.textContent = new Date(user.metadata.creationTime).toLocaleDateString();
            
            // Calculate and display how long ago the user last logged in
            const lastLoginTime = new Date(user.metadata.lastSignInTime);
            const timeAgo = getTimeAgo(lastLoginTime);
            lastLogin.textContent = timeAgo;
        } else {
            // No user is logged in, redirect to login page
            window.location.href = 'index.html';
        }
    });

    // ====================================
    // Logout Handler
    // ====================================
    // Listen for clicks on the logout button
    logoutBtn.addEventListener('click', async () => {
        try {
            // Try to sign out from Firebase
            await auth.signOut();
            // If successful, redirect to login page
            window.location.href = 'index.html';
        } catch (error) {
            // If there's an error, log it to the console
            console.error('Error signing out:', error);
        }
    });
});

// ====================================
// Time Ago Calculator
// ====================================
// This function takes a date and returns how long ago it was
// For example: "2 hours ago", "5 minutes ago", etc.
function getTimeAgo(date) {
    // Calculate how many seconds ago
    const seconds = Math.floor((new Date() - date) / 1000);
    
    // Convert to years if more than a year ago
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + ' years ago';
    
    // Convert to months if more than a month ago
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + ' months ago';
    
    // Convert to days if more than a day ago
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + ' days ago';
    
    // Convert to hours if more than an hour ago
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + ' hours ago';
    
    // Convert to minutes if more than a minute ago
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' minutes ago';
    
    // If less than a minute ago, show seconds
    return Math.floor(seconds) + ' seconds ago';
} 