import { useForm } from '../../shared';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../store/thunks/authThunk';
import { AppDispatch } from '../../store/store';
import { startLoading } from '../../store/slices/loadingSlice';

const formData = {
  email: '',
  password: ''
}

const formValidations = {
  email: [ (value: string) => value.includes('@'), 'Email must contain @.'],
  password: [ (value: string) => value.length > 0, 'Password is required.']
}

export const LoginPage = (): JSX.Element => {

  const dispatch = useDispatch<AppDispatch>();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { email, password, emailValid, passwordValid, isFormValid, onInputChange } = useForm(formData, formValidations);
  
  const onSubmitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    
    setFormSubmitted(() => {
     return  true;
    });
    
    if(isFormValid) {
      dispatch( startLoading() );
      dispatch( startLogin({email, password}) );
    }
  }


  return (
    <>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={(e) => onSubmitLogin(e)} noValidate>
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" value={email} name="email" onChange={onInputChange} />
                {
                  formSubmitted && emailValid ? 
                  ( <div className="text-danger">
                      { emailValid }
                    </div> ) : null
                }
                
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" value={password} name="password" onChange={onInputChange} />
                {
                  formSubmitted && passwordValid ? 
                  ( <div className="text-danger">
                      { passwordValid }
                    </div> ) : null
                }
              </div>
            </div>
            <div className="modal-footer">
              <Link type="button" className="btn btn-secondary" to="/register" >Register</Link>
              <button type="submit" className="btn btn-primary" >Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}