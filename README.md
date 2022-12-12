# Movie Search Challenge

The application was built using:

- Create React App
- Sass
- React Router
- Axios
- React Testing Library + Jest
- ES Lint + Prettier

Additional packages used: DayJS, Lodash(debounce)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000/) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

## Notes

- The application was tested but some tests weren't passing due the an bad useFetch hook mock, which I drop off a further investigation due the lack of time. Also, the useFetch hook wasn't tested
- After entering the movie details page, when we go back to the previous page the state resets, so this could be improved using local storage
