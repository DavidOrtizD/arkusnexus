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
        team: null,
        englishLevel: null,
        techSkills: null,
        cv: null
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
        state.team = data.team;
        state.englishLevel = data?.englishLevel;
        state.techSkills = data?.techSkills;
        state.cv = data?.cv;
      });
      
      builder.addCase(startLogin.rejected, (state, {payload}) => {
        const data = payload as any;
        state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
        state.uid = null;
        state.email = null;
        state.name = null;
        state.role = null;
        state.team = null;
        state.englishLevel = null;
        state.techSkills = null;
        state.cv = null;
      });
      
      builder.addCase(startLogout.fulfilled, (state, {payload}) => {
        const data = payload as any;
        state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
        state.uid = null;
        state.email = null;
        state.name = null;
        state.role = null;
        state.team = null;
        state.englishLevel = null;
        state.techSkills = null;
        state.cv = null;
      });
    }
});


// Action creators are generated for each case reducer function
export const { checkingCredentials } = authSlice.actions;