import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { useEffect } from 'react';

export const UserInfopage = () => {
  const {role, name, email, uid, team, status} = useSelector((state: RootState) => state.auth);
  
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
            </div>
        </div>
      </div>
    </>
  )
}