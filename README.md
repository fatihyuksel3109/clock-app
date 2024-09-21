# Digital Clock App

A sleek and responsive digital clock app built using React. This app displays the current time in a digital clock format using a seven-segment display style for the digits.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Available Scripts](#available-scripts)
- [License](#license)

## Demo

Check out a live demo [here](https://digital-clock-wine-nine.vercel.app/).

## Features

- Responsive digital clock that updates every second.
- Displays hours, minutes, and seconds using seven-segment styled digits.
- Colon separators between the hour, minute, and second digits.
- Modular and maintainable code with reusable React components.

## Installation

To run this app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/fatihyuksel3109/digital-clock-app.git
   cd digital-clock-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

Once the app is running, the current time will be displayed in a seven-segment digital clock format. The time updates in real-time every second.

## File Structure

```
src/
├── components/
│   ├── Clock.jsx           # Main Clock component that displays the time
│   ├── Clock.css           # Clock styles
│   ├── Colon.jsx           # Colon separator between digits
│   ├── Digit.jsx           # Digit component that shows individual digits
│   ├── Segment.jsx         # Segment component used in each digit
│   ├── TimeDisplay.jsx     # Combines all digit and colon components
│   └── useTimer.js         # Custom hook for handling the timer logic
├── App.js                  # Root app component
├── index.js                # Entry point for the React app
└── index.css               # Global styles
```

### Key Components

- **Segment**: Represents each segment of the seven-segment display.
- **Digit**: Displays a number (0-9) using the `Segment` components.
- **Colon**: Adds colon (`:`) separators between the digits.
- **TimeDisplay**: Combines `Digit` and `Colon` to display the time.
- **useTimer**: A custom hook to manage the time state.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the clock interface.
- **JavaScript (ES6)**: Core language used to build the app.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode. Open `http://localhost:3000` to view it in the browser.
- `npm run build`: Builds the app for production to the `build` folder.

## License

This project is licensed under the MIT License.