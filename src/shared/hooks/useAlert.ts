import { useState, useEffect } from 'react';
import { AlertType } from '../interfaces/alert.interface';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { clearAlert } from '../../store/slices/alertSlice';

export const useAlert = (display: boolean = false, type: AlertType = AlertType.success, content: string = "") => {

  const dispatch = useDispatch();
  const [displayAlert, setDisplayAlert] = useState(display);
  const [alertType, setAlertType] = useState(type);
  const [alertContent, setAlertContent] = useState(content);

  const {aType, aDisplay, aContent } = useSelector((state:RootState)=> state.alert);

  useEffect(()=> {
    setTimeout(()=> {
      dispatch(clearAlert());
      setDisplayAlert(false);
    }, 3000);
  }, [displayAlert]);

  useEffect(()=> {
    if(aDisplay) {
      setAlertContent(aContent);
      setAlertType(getErrorType(aType));
      setDisplayAlert(aDisplay);
    }
  }, [aDisplay]);

  function getErrorType(type:string) {
    switch (type) {
      case "Error":
        return AlertType.error
      break;
      
      case "Info":
        return AlertType.info
      break;
    
      default:
        return AlertType.success
      break;
    }
  }

  return {
    displayAlert,
    alertType,
    alertContent,
    setDisplayAlert,
    setAlertType,
    setAlertContent
  }
}