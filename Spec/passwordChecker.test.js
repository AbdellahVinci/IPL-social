import { Main } from '../Src/passwordChecker.js';

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


});
