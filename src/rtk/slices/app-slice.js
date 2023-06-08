import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState: "app",
    reducers : {
        appName : (state) => {
            state = "Skin-Care-App"
        }
    }
})

export const {appName} = appSlice.actions;
export default appSlice.reducer