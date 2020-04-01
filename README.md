# Find My Reps

## Description

This is a React Native project utilizing Google Civic Information API to display an interactive list of a user's elected representatives when provided with the user's address.  Workflow managed by Expo.  State management by Redux, and Redux Persist.  Local storage by AsyncStorage.  Address autocomplete feature powered by Google Places API.

## Google Play URL

https://play.google.com/store/apps/details?id=com.marioamayasd.find_my_reps

## Table of Contents

    root
        .babelrc
        .gitignore
        App.js
        app.json
        babel.config.js
        package.json
        README.md
        yarn.lock

        .expo-shared
            assets.json

        actions
            index.js

        assets
            icon.png
            splash.png

        components
            AddressForm.js
            GoogleAutoComplete.js
            Header.js
            RepCard.js
            RepsList.js

        img
            background.png
            powered_by_google.png
            profile.jpg
            reps_background.png

        reducers
            index.js

        screens
            HomeScreen.js
            ModalScreen.js
            RepDetails.js
            RepsScreen.js

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    GOOGLE_KEY= your Google API key, which can be generated in the Google Cloud Console

## Author

Mario Amaya  
http://www.marioamayasd.com  
mario.amaya.web@gmail.com