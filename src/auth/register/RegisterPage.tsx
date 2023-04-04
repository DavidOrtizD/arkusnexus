import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { startLoading, stopLoading } from '../../store/slices/loadingSlice';
import { useAlert, useForm } from '../../shared';
import * as api from '../../common/apis.json';
import { Alert } from '../../shared/components/alert/Alert';
import { AlertType } from '../../shared/interfaces/alert.interface';

const formData = {
  name:'',
  email: '',
  password: '',
  passwordCheck: ''
}

const formValidations = {
  name: [ (value: string) => value.length > 0, 'Name is required.'],
  email: [ (value: string) => value.includes('@'), 'Email must contain @.'],
  password: [ (value: string) => value.length >= 8, 'Password is must be at least 8 charaters long.'],
  passwordCheck: [ ['verifyEmail', 'password'], 'Passwords must match.']
}

export const RegisterPage  = (): JSX.Element => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { displayAlert, alertType, alertContent, setDisplayAlert, setAlertType, setAlertContent } = useAlert(false, AlertType.success, "");

  const { email, password, passwordCheck, name,  emailValid, passwordValid, nameValid, passwordCheckValid, onInputChange, onResetForm } = useForm(formData, formValidations);

  const onSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setFormSubmitted(() => {
        return  true;
      });

      dispatch( startLoading() );
   
      await axios.post(api.auth.register, {email, password, name})
        dispatch( stopLoading() );
        setDisplayAlert(true);
        setAlertType(AlertType.success);
        setAlertContent("User was registered correctly.");
        setFormSubmitted(false);
        onResetForm();
    } catch(e: any) {
        dispatch( stopLoading() );
        setDisplayAlert(true);
        setAlertType(AlertType.error);
        setAlertContent(e.response.data.message);
    }
  }

  return (
    <>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={(e) => onSubmitLogin(e)} noValidate>
            <div className="modal-header">
              <h5 className="modal-title">Register</h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">User Name</label>
                <input type="text" id="inputName" className="form-control" value={name} name="name" onChange={onInputChange} />
                {
                  formSubmitted && nameValid ? 
                  ( <div className="text-danger">
                      { nameValid }
                    </div> ) : null
                }
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email address</label>
                <input type="email" id="inputEmail" className="form-control" value={email} name="email" onChange={onInputChange} />
                {
                  formSubmitted && emailValid ? 
                  ( <div className="text-danger">
                      { emailValid }
                    </div> ) : null
                }
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" id="inputPassword" className="form-control" value={password} name="password" onChange={onInputChange} />
                {
                  formSubmitted && passwordValid ? 
                  ( <div className="text-danger">
                      { passwordValid }
                    </div> ) : null
                }
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword2" className="form-label">Verify Password</label>
                <input type="password" id="inputPassword2" className="form-control" value={passwordCheck} name="passwordCheck" onChange={onInputChange} />
                {
                  formSubmitted && passwordCheckValid ? 
                  ( <div className="text-danger">
                      { passwordCheckValid }
                    </div> ) : null
                }
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" >Register</button>
            </div>
          </form>
        </div>
      </div>
      {
        displayAlert ? <Alert type = {alertType} content={alertContent} /> : null
      }
      
    </>
  )
}