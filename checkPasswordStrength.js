function checkPasswordStrength(password) {
    // Minimum requirements check - return 0 if any are missing
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    
    if (!hasUpperCase || !hasNumber || !hasSpecialChar) {
        return 0; // Fail minimum requirements
    }

    // Calculate strength score
    let strength = 1; // Base score for meeting minimums
    
    // Length bonuses
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    
    // Complexity bonuses
    if (password.match(/[A-Z]/g)?.length > 1) strength += 1; // Multiple uppercase
    if (password.match(/[0-9]/g)?.length > 1) strength += 1; // Multiple numbers
    if (password.match(/[^A-Za-z0-9]/g)?.length > 1) strength += 1; // Multiple special chars
    
    // Cap at maximum strength (5 in this case)
    return Math.min(strength, 5);
}
