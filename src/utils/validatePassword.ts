export const validatePassword = (password: string | undefined): boolean => {
    if (!password) {
        return false;
    }

    if (password.length < 8) {
        return false;
    }

    let hasNumber = false;
    let hasSpecialChar = false;

    for (const char of password) {
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (!/[a-zA-Z]/.test(char)) {
            hasSpecialChar = true;
        }
    }

    let isValid = hasNumber && !hasSpecialChar;
    console.log('isValid', isValid);
    return isValid;
};
