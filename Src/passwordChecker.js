export class Main {
    validateLength(password) {
        return password.length >= 8;
    }

    validateSpecialCharacter(password) {
        const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '.', '?', ':', '"', '{', '}', '|', '<', '>', '/'];
        for (let i = 0; i < password.length; i++) {
            if (specialCharacters.includes(password[i])) {
                return true;
            }
        }
        return false;
    }

    validateNumber(password) {
        for (let i = 0; i < password.length; i++) {
            if (password[i] >= '0' && password[i] <= '9') {
                return true;
            }
        }
        return false;
    }

    validateNoIPL(password) {
        return !password.toLowerCase().includes('ipl');
    }
    



}
