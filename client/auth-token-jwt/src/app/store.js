import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import countrySlice from "../features/country/countrySlice"

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        countries: countrySlice
    },
})