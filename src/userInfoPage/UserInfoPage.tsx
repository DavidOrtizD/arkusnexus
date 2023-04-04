import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { useEffect } from 'react';

export const UserInfopage = () => {
  const {role, name, email, uid, team, status, cv, techSkills, englishLevel} = useSelector((state: RootState) => state.auth);
  
  const navigate = useNavigate();
  
  useEffect(()=> {
    if(status !== 'authenticated') {
      navigate("/");
    }
  }, [status]);
  
  return (
    <>
      <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{name} Info.</h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">User Id: </label>
                <p>
                  {uid}
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label">Role: </label>
                <p>
                  {role}
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label">Email address: </label>
                <p>
                  {email}
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label">Current Team: </label>
                <p>
                  {team}
                </p>
              </div>
              {
                cv ? (
                  <div className="mb-3">
                    <label className="form-label">Cv: </label>
                    <p>
                      {cv}
                    </p>
                  </div>
                ) : null
              }
              
              {
                techSkills ? (
                  <div className="mb-3">
                    <label className="form-label">Tech Skills: </label>
                    <p>
                      {techSkills}
                    </p>
                  </div>
                ) : null
              }
              {
                englishLevel ? (
                  <div className="mb-3">
                    <label className="form-label">English Level: </label>
                    <p>
                      {englishLevel}
                    </p>
                  </div>
                ) : null
              }
            </div>
        </div>
      </div>
    </>
  )
}