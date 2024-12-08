# React Forms with Tailwind CSS

This project demonstrates a simple React application with Sign Up and Login forms built using **Formik** and **Yup** for form handling and validation. The forms feature enhanced UX with **Tailwind CSS** for styling and additional functionality like password strength indicators and "Remember Me" functionality.

## Features

- **Sign Up Form**:
  - Validates email and password using Yup.
  - Displays a password strength indicator.
  - Displays error messages for invalid inputs.
  - Tailwind CSS for responsive and modern styling.

- **Login Form**:
  - "Remember Me" functionality saves email to local storage.
  - Validates email and password.
  - Preloads the remembered email if available.
  - Tailwind CSS for consistent styling.

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/5Talib/better.git
   cd vite-project

2. **Run the project**:

    ```
    npm run dev

## Design Choices

- Used formik and yup for form handling.
- Used tailwind CSS for styling.

## Assumptions

- Users will input valid email formats (e.g., example@example.com).
- A minimum password length of 8 is sufficient for validation.

## Limitations

- This project does not include actual authentication logic (e.g., connecting to a backend API).
- Local storage is used to simulate "Remember Me" functionality without encryption.
- The password strength indicator is a basic implementation and may not cover all edge cases.

