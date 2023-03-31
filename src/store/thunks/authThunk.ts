import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginData } from '../../shared/interfaces/loginData';
import axios from 'axios';
import * as apis from '../../common/apis.json'
import { stopLoading } from '../slices/loadingSlice';

const config = {
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
  }
}

export const startLogin = createAsyncThunk<any, LoginData>('auth/login', async (loginData: LoginData, {getState, dispatch}) => {
  try {
    const response = await axios.post(apis.auth.login, loginData, config);
  
    dispatch(stopLoading());
    
    return response.data;
  } catch(e) {
    console.log(e);
    dispatch(stopLoading());
  }
  
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