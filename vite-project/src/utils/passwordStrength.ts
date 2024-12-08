export const calculatePasswordStrength = (password: string) => {
    const lengthCriteria = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    let strength = 'Weak';
    if (lengthCriteria && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar) {
      strength = 'Strong';
    } else if (lengthCriteria && (hasUpperCase || hasLowerCase) && hasNumbers) {
      strength = 'Medium';
    }
  
    return strength;
  };
  