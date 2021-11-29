import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk: getAllergyCheck
// my api call 
export const getCountryNames = createAsyncThunk(
    "countryNames",
    async (arg, { getState }) => {
        const state = getState();
        const continent = state.selectedContinent;


        try {
            const apiUrl = process.env.REACT_APP_COUNTRY_CODE
            // const apiUrl = GetAppSettingsValueFromStoreData("Azure App Service", "FHIR Base URL", "Mobile", LocalDBAppSettings);
            // const route = GetAppSettingsValueFromStoreData("Azure App Service", "Get Allergy Check Route", "Mobile", LocalDBAppSettings);

            var config = {
                method: 'GET',
                url: `${apiUrl}${continent}&pretty=true`
            };

            const response = await axios(config);
            const data = await response.data.data;
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);


// Slice: checkAllergySlice
export const countryDataSlice = createSlice({
    name: "countryData",
    initialState: {
        code: []
    },
    reducers: {
        selectedContinent: (state, { payload }) => {
            console.log(payload)
            state.continent = payload

        },


    },


});

// Actions: setIsChecked
export const {
    selectedContinent,

} = countryDataSlice.actions;

// Reducer  checkAllergy.reducer
export default countryDataSlice.reducer;