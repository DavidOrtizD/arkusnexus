import { createSlice } from '@reduxjs/toolkit';
import { startLogin, startLogout } from '../thunks/authThunk';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        name: null,
        role:null,
        token: null,
        errorMessage: null,
    },
    reducers: {
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    },
    extraReducers: (builder) => {
      builder.addCase(startLogin.fulfilled, (state, {payload}) => {
        const data = payload as any;
        state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
        state.uid = data.uid;
        state.email = data.email;
        state.name = data.name;
        state.role = data.role;
        state.token = data.token;
        state.errorMessage = null;
      });
      
      builder.addCase(startLogout.fulfilled, (state, {payload}) => {
        const data = payload as any;
        state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
        state.uid = null;
        state.email = null;
        state.name = null;
        state.role = null;
        state.token = null;
        state.errorMessage = null;
      });
    }
});


// Action creators are generated for each case reducer function
export const { checkingCredentials } = authSlice.actions;