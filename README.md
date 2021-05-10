# Superheroes app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

See live demo: https://superheroes-app.netlify.app/

## Get Started

Before starting, please fill in the environment variable REACT_APP_API_URL in your .env file

API used: https://akabab.github.io/superhero-api/api/all.json

This project uses husky to run some scripts (run linters, prettier, tests) during the git hooks flow (pre-commit, prepare-commit-msg). Please make sure the result of these scripts is successful before committing.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm pretty`

Runs prettier to format the project code

### `npm lint:js`

Runs eslint to check the code format and execute eslint rules defined for the project

### `npm lint:js:fix`

Runs eslint and fix all possible errors (some formatting errors may not be corrected automatically, you need to make manual changes to fix them)

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
