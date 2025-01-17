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



}
