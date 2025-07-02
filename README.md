# Chord Calculator

This is a web-based music theory tool that helps users identify the name of a chord based on selected notes on an interactive piano interface.

## Features

- **Interactive Piano UI** - Click on the keys to select the notes of the chord you would like to calculate.
- **Root Dropdown Menu** - Select a root you would like to use to calculate the chord name.
- **Chord Name Calculator** - Click on  the "Calculate" button to analyze thhe selected notes and display the chord name.

## How To Use 

1. Click on the piano keys to select the chord that make up your chord (make sure to select at least 3 keys)
1. Select a root note from the dropdown menu. The chord name will be calculated based on the selected root
1. Click on the "Calculate" button
1. The app will analyze the intervals in the provided chord and return the name of the chord (e.g., Cmaj7, Am, F#dim, etc.).

## Know Issues

1. Becase the app searches through a database to find the matching chord type, it is possible that the chord you would like to calculate is not able to be found. This is due to the numerous combinations of intervals that are possible in music and the inconsistent naming standard for chords in music theory that adds an extra layer of complexity when deciding how to calculate chords.
1. There is a bug that occurs when resizing the screen that causes the elements on the website and the layout to be rendered incorrectly.
1. When resizing the keyboard while having active keys, they are not removed from the dropdown menu and are still used to calculate the chord, even though they should be removed.

## Technologies Used

- React JS
- React Router
- Typescript / Javascript
- HTML / CSS
- Framer-Motion

## Contact

For any questions, suggestions, or feedback, please feel free to reach out:

- Email: miguelbarretoguitar@gmail.com
- GitHub: @mbdguitar