import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginData } from '../../shared/interfaces/loginData';
import { useIsLoading } from '../../shared/hooks/useIsLoading';
import { stopLoading } from '../slices/loadingSlice';



export const startLogin = createAsyncThunk('auth/login', async (loginData: LoginData, {getState, dispatch}) => {
  const {email} = loginData;
  
  const data =  await new Promise((resolve, reject)=> {
    setTimeout(()=> {
      const mock = {
        uid: 1,
        email,
        name: 'david ortiz',
        role: 'admin',
        team: 'Training Team',
        token: '1234',
        errorMessage: null,
      };
      dispatch( stopLoading() );
      resolve(mock);
    }, 3000);
  });
  return data;
});

export const startLogout = createAsyncThunk('auth/logout', async (_, {getState, dispatch}) => {
  console.log(getState());
  const data =  await new Promise((resolve, reject)=> {
    setTimeout(()=> {
      const mock = {};
      dispatch( stopLoading() );
      resolve(mock);
    }, 3000);
  });
  return data;
});