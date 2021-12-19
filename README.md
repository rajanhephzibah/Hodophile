# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This website helps travellers learn more about COVID restrictions in different countries, risk levels and the documents required
to travel there. It is not complete and requires a lot more work. Here are a couple things you will need if you decide to 
work on it.

## Before You Start....

There are a couple things you should know before you begin using or looking at this project. 
The following list of languages, concepts and libraries should help you understand the basics of this application.
1. Javascript
2. HTML
3. CSS
4. React
5. Bootstrap

## To Use It...

You'll need a couple of libraries and packages. Start with 

### `npm install`

This should install the required node packages. Then install the bootstrap package since I used multiple Bootstrap components.

### `npm install react-bootstrap`

This project uses the Amadeus COVID-19 and travel safety API. So ensure you have an account with Amadeus and then fill out the empty_config.js with your credentials to run this app. Do not forget to rename the empty_config.js file to config.js. Next, you will need to install the amadeus package to complete setting up the API. For that, just use

### `npm install amadeus`

For information about each class, look at their respective files.

## Some Possible Improvements

If you want to work on it, here are a couple things you could fix:

1. Find an API for the Passport/ Visa Requirements section to display the passport and visa requirements to visit different countries on the drop-down menu.

2. Although this is probably a simple fix, I was unable to stretch the image on the home page to be a background image. Maybe you can find the solution!
              
3. Get an interactive map for the home page. On clicking a specific country, the application will ask the user to choose between COVID or passport requirements so that they can view the corresponsing information.

4. Clean up design improve UI to make the application more user-friendly.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
