import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')

import userReducer from '../redux/userSlice';
// const logger = reduxLogger.createLogger();



export const store = configureStore({
    reducer: {
        user: userReducer
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})