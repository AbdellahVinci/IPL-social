const { Main } = require('../Src/passwordChecker.js');


describe('Password Validation', function () {
    const result = new Main();

    afterEach(() => {
        console.log('Test finished.');
    });


    it('should invalidate a password shorter than 8 characters', function () {
        const password = 'Short1!';
        const output = result.validateLength(password);
        expect(output).toBe(false);
    });



    it('should invalidate a password without a special character', function () {
        const password = 'NoSpecial1';
        const output = result.validateSpecialCharacter(password);
        expect(output).toBe(false);
    });



    it('should invalidate a password without a number', function () {
        const password = 'NoNumber!';
        const output = result.validateNumber(password);
        expect(output).toBe(false);
    });


    it('should invalidate a password containing "IPL" ', function () {
        const password = 'MyPassIPL1!';
        const output = result.validateNoIPL(password);
        expect(output).toBe(false);
    });


    it('should invalidate a password containing "IPL" ', function () {
        const password = 'MyPassIPL1!';
        const output = result.validateNoIPL(password);
        expect(output).toBe(false);
    });
    




});
