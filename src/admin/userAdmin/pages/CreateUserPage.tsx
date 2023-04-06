import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { startLoading, stopLoading } from '../../../store/slices/loadingSlice';
import { useAlert, useForm } from '../../../shared';
import * as api from '../../../common/apis.json';
import { Alert } from '../../../shared/components/alert/Alert';
import { AlertType } from '../../../shared/interfaces/alert.interface';

const formData = {
  name:'',
  email: '',
  role: '',
  team: '',
  englishLevel: '',
  cv: '',
  techSkills: '',
  password: '',
  passwordCheck: ''
}

const formValidations = {
  name: [ (value: string) => value.length > 0, 'Name is required.'],
  email: [ (value: string) => value.includes('@'), 'Email must contain @.'],
  password: [ (value: string) => value.length >= 8, 'Password is must be at least 8 charaters long.'],
  role: [ (value: string) => value.length > 0, 'Please Select a Role.'],
  passwordCheck: [ ['verifyEmail', 'password'], 'Passwords must match.']
}

export const CreateUserPage  = (): JSX.Element => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { displayAlert, alertType, alertContent, setDisplayAlert, setAlertType, setAlertContent } = useAlert(false, AlertType.success, "");

  const { email, 
          password, 
          passwordCheck, 
          name, 
          role, 
          team, 
          englishLevel, 
          cv, 
          techSkills, 
          emailValid, 
          passwordValid, 
          nameValid, 
          passwordCheckValid, 
          roleValid, 
          onInputChange, 
          onResetForm, 
          isFormValid } = useForm(formData, formValidations);

  const onSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setFormSubmitted(true);

      if(isFormValid) {
        dispatch( startLoading() );
        await axios.post(api.user.createUser, {email, password, name, role, team, englishLevel, cv, techSkills})
        dispatch( stopLoading() );
        setDisplayAlert(true);
        setAlertType(AlertType.success);
        setAlertContent("User was registered correctly.");
        setFormSubmitted(false);
        onResetForm();
      }
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
              <h5 className="modal-title">Create New User</h5>
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
                <label htmlFor="inputRole" className="form-label">Role</label>
                <select className="form-select" id="inputRole" aria-label="Default select example" name="role" onChange={onInputChange}  value={role}>
                  <option defaultValue="">Select Role Type</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                {
                  formSubmitted && roleValid ? 
                  ( <div className="text-danger">
                      { roleValid }
                    </div> ) : null
                }
              </div>
              <div className="mb-3">
                <label htmlFor="inputTeam" className="form-label">Assigned Team</label>
                <input type="text" id="inputTeam" className="form-control" value={team} name="team" onChange={onInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEnglishLevel" className="form-label">English Level</label>
                <select className="form-select" id="inputEnglishLevel" aria-label="English level select" name="englishLevel" onChange={onInputChange}  value={englishLevel}>
                  <option defaultValue="" >Select English Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="inputCv" className="form-label">CV</label>
                <input type="text" id="inputCv" className="form-control" value={cv} name="cv" onChange={onInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="inputCv" className="form-label">English Level</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="techSkills" rows = {3} value = {techSkills} onChange={onInputChange}></textarea>
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