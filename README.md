# Setting Up and Running Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`
and then
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`


# Technical Architecture and Key Decisions

There are 4 routes with different components.

1. Home page -  There is a form in which brand user can enter the desired details and submit.
2. List page -  Here only those influencers will be listed who fulfils the criteria of brand user.
3. Details page -  Here all the details of the selected influencer will be displayed like images, contact etc. I have showed only influencer details as I need to create fake API.
4. Summary page - It ensures that the appointment is booked successfully.

I thought that I can use contextAPI for the state management, then later I realizes for simplicity I can go through the query parameters because when the page reloads then contextAPI loses data.
I have utilized Ant Design very beautifully after reading their documentation and passed props in the Ant Designs' components too.
