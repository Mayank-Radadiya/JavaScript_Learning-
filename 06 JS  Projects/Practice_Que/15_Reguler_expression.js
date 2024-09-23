// Function to check if an email address is valid using regular expression
function isValidEmail(email) {
    // Regular expression pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the regex pattern
    return emailRegex.test(email);
}

// Example usage
const testEmails = [
    "example@email.com",
    "invalid.email@com",
    "user@domain.co.uk",
    "missing@tld.",
    "no@at-sign.com",
    "spaces in@email.com",
    "multiple@at@signs.com"
];

testEmails.forEach(email => {
    console.log(`${email} is ${isValidEmail(email) ? 'valid' : 'invalid'}`);
});
