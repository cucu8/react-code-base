import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountry = createAsyncThunk('getCountry', async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all")
    return data
})