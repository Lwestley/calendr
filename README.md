# Calendr 
<br>
I created a cool calendar appointment application.

## Installation
---
In order to run the app, please make sure you have `mongodb` installed. As well as the service `mongod` running.

    npm install

Create two terminals and run

    ENVIRONMENT=dev npm start

... to get the server started.

Then Run

    npm run build

... to get Webpack listening to your changes.


## Testing
---

**Unit Tests**

This project uses `jest` by Facebook to test the application. Files that we test belong in the `__tests__` directory. <br>
`npm run test`
<br>

**End-to-End**
<br>
The end-to-end tests belong in a different project folder. Please look at this repo here: [lwestley](https://www.github.com/lwestley/e2e)


### Notes
When deploying Heroku, be sure to pass in  your own `DB` environment variable, so the app has access to a database. This app does require `mongod` service to be running.
