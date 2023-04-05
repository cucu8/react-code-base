import { createSlice } from "@reduxjs/toolkit"
import { getCountry } from "./services"

const initialState = {
    countries: [],
    error: "",
    loading: false
}

export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCountry.pending, (state) => {
            state.loading = true
            state.error = ""
        })
        builder.addCase(getCountry.fulfilled, (state, action) => {
            state.countries = action.payload
            state.loading = false
        })
        builder.addCase(getCountry.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false

        })
    }
})

export const { } = countrySlice.actions

export default countrySlice.reducer