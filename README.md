# TLI-Client

The TLI-client is the frontend of our program. It contains two major "Views" - the mock banking page, which simulates the bank customer's view, and the bank agent's view, which is viewable here: https://main.ds5ehx1xy0t7f.amplifyapp.com/. 

For demonstration purposes, the ID used is 1402110922112412 and the VIN used for the trade-in is 1fm5k7bh1ggc33135.

## How to Run the Mock Banking Page
The mock banking page is designed to be hosted locally, so that it is separated from the context of our bank agent's view. To run it, simply run the `index.html` file under `/mock banking page/` in your browser.

## How to Run the Bank Agent's View Locally
- Make sure you have [Node.js](https://nodejs.org/en/download/) and NPM installed
- In the main directory, run `npm install` (for Windows) or `sudo npm install` (for linux/mac). (If there is an error, try deleteing `package-lock.json` and `yarn.lock`)
- Type `npm start` (Windows) or `sudo npm start` (for linux/mac) to activate TLI-Client (the frontend) locally

## Running Tests
- Type `yarn test` into the console to run the test files.
