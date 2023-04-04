import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as apis from '../../common/apis.json'
import { stopLoading } from '../slices/loadingSlice';
import { launchAlert } from '../slices/alertSlice';
import { LoginResponse, LoginData, AlertType } from '../../shared';

export const startLogin = createAsyncThunk<any, LoginData>('auth/login', async (loginData: LoginData, {getState, dispatch}) => {
  try {
    const response = await axios.post(apis.auth.login, loginData);
    const data: LoginResponse = response.data; 
    
    //Set authtoken to all requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;

    dispatch(stopLoading());
    
    return data.usrData;
  } catch(e: any) {
    dispatch(launchAlert({type: AlertType.error, content: e.response.data.message, display: true }));
    dispatch(stopLoading());
    throw new Error(e);
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