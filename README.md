# IPL Social


## Author Information
**Name:** Azzouz Abdellah  
**Email:** abdellah.azzouz@student.vinci.be

## GitHub URL
[GitHub Repository](https://github.com/AbdellahVinci/IPL-social)

## Project Description
This project implements a **Password Checker** system that validates passwords based on security criteria. It includes a main functionality file (`passwordChecker.js`) and a corresponding test file (`passwordChecker.test.js`). The tests are written using the **Jasmine** testing framework to ensure all password validation features work as intended.

### Functionality (passwordChecker.js)
The `passwordChecker.js` file defines the core logic for validating passwords. It checks whether a password meets specific security requirements, including:

- **Length Validation**: Ensures the password is neither too short nor too long.
- **Character Requirements**:
  - At least one uppercase letter.
  - At least one lowercase letter.
  - At least one numeric digit.
  - At least one special character (e.g., `!`, `@`, `#`).
- **General Strength**: Avoids weak patterns or easily guessable combinations.

### Tests (passwordChecker.test.js)
The `passwordChecker.test.js` file contains unit tests to verify the functionality of the password checker. These tests include:

1. **Valid Passwords**:
   - Ensures that strong passwords pass all checks.

2. **Invalid Passwords**:
   - Verifies the rejection of passwords that:
     - Are too short or too long.
     - Lack required character types (e.g., no numbers, no special characters).
     - Are weak or follow common patterns.

3. **Edge Cases**:
   - Tests scenarios such as empty strings or passwords containing unusual characters.

The tests provide comprehensive coverage, ensuring the robustness of the password validation logic.


## Instructions to Run Tests
1. Clone the project from the GitHub repository:
   ```bash
   git clone https://github.com/AbdellahVinci/IPL-social.git

```bash
npm install
```   

```bash
npx jasmine
```

Ensure that Jasmine is installed and configured correctly in your environment. If needed, run `npm install` to install all dependencies.

## Additional Information
- **Dependencies:** The project uses the following key dependencies:
  - Jasmine for testing.
  - Node.js runtime for executing the JavaScript code.
- **Structure:**
  - `Src/`: Contains the `passwordChecker.js` file with the main logic.
  - `Spec/`: Contains the `passwordChecker.test.js` file with the tests.





