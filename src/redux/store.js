import { configureStore } from "@reduxjs/toolkit";

import countryDataReducer from './slices/countryDataSlice';
// Store: userDetails, patientList
export default configureStore({
    reducer: {
        countryData: countryDataReducer,

    },
});