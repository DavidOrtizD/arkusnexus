import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        aContent: "",
        aDisplay: false,
        aType: "" //Error,Info,Success
    },
    reducers: {
        launchAlert: ( state, {payload} ) => {
            state.aContent = payload.content;
            state.aDisplay = payload.display;
            state.aType = payload.type;
        },
        clearAlert: ( state ) => {
          state.aContent = "";
          state.aDisplay = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { launchAlert, clearAlert } = alertSlice.actions;