import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// AsyncThunk: getAllergyCheck
// my api call
export const getCountriesData = createAsyncThunk(
    "countriesData/countriesData",
    async (arg, { getState }) => {
        const state = getState();

        const continent = state.countriesData.continent;
        console.log(continent);


        // console.log(state);

        try {
            const apiUrl = process.env.REACT_APP_COUNTRY_CODE;
            // const apiUrl = GetAppSettingsValueFromStoreData("Azure App Service", "FHIR Base URL", "Mobile", LocalDBAppSettings);
            // const route = GetAppSettingsValueFromStoreData("Azure App Service", "Get Allergy Check Route", "Mobile", LocalDBAppSettings);
            console.log(`${apiUrl}${continent}&pretty=true`)
            var config = {
                method: "GET",
                url: `${apiUrl}${continent}&pretty=true`,
            };

            const response = await axios(config);
            const data = await response.data.data;
            // console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
);

// Slice: checkAllergySlice
export const countiesDataSlice = createSlice({
    name: "countriesData",
    initialState: {
        continent: "asia",
        countries: {}
    },
    reducers: {
        selectedContinent: (state, { payload }) => {
            // console.log(payload);
            state.continent = payload;
            console.log(state.continent)
        },
    },
    extraReducers: {

        [getCountriesData.fulfilled]: (state, { payload }) => {
            if (payload) {
                state.countries = payload;

            }
        },

    },
});

// Actions: setIsChecked
export const { selectedContinent } = countiesDataSlice.actions;

// Reducer  checkAllergy.reducer
export default countiesDataSlice.reducer;
