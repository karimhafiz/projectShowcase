import { configureStore } from "@reduxjs/toolkit";

import countriesDataReducer from './slices/countriesDataSlice';
// Store: userDetails, patientList
export default configureStore({
    reducer: {
        countriesData: countriesDataReducer,

    },
});