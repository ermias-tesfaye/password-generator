# Password Generator App

A simple web application to generate secure passwords with customizable length, numeric digits, and special characters. Built using React, Vite, and TailwindCSS.

## Features

- Generate random passwords.
- Specify password length.
- Include or exclude numeric digits.
- Include or exclude special characters.
- Copy generated password to clipboard with a single click.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ermias-tesfaye/password-generator.git
    ```
2. Navigate to the project directory:
    ```bash
    cd password-generator
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

## Components

### `App`

The main component that includes:

- An input field to display the generated password.
- A range input to specify the length of the password.
- Checkbox inputs to include/exclude numeric digits and special characters.
- A button to copy the password to the clipboard.


### Dependencies

- `React`: A JavaScript library for building user interfaces.
- `Vite`: A build tool that provides a faster and leaner development experience.
- `TailwindCSS`: A utility-first CSS framework.

## How to Use

1. Adjust the range slider to set the desired password length.
2. Check or uncheck the boxes to include numeric digits and/or special characters.
3. Click the "Copy" button to copy the generated password to the clipboard. The button text will change to "Copied" for 3 seconds to indicate success.




