import { Link, NavLink } from 'react-router-dom';
import { FaDoorOpen, FaDoorClosed } from 'react-icons/fa';
import logo from '../../assets/img/arkus_logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { startLogout } from '../../store/thunks/authThunk';
import { startLoading } from '../../store/slices/loadingSlice';

export const Navbar = () => {

  const {status, role} = useSelector((state: RootState) => state.auth);
  
  const dispatch = useDispatch<AppDispatch>();

  const doLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch( startLoading() );
    dispatch( startLogout() );
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
          <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                status === 'authenticated' ? (
                  <li className="nav-item">
                    <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/userInfo">User Info</NavLink>
                  </li>
                ) : null
              }
              {
                role === 'admin' || role === 'super-admin'  ? (
                  <>
                    <li className="nav-item dropdown">
                      {/* <NavLink className={ ({isActive}) => `nav-link dropdown-toggle ${isActive ? 'active' : ''}`} to="/user" id="navbarDropdown" aria-expanded="false">Admin User</NavLink> */}
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Users
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <NavLink className="dropdown-item" to="/user/create">Create User</NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/user/admin">Admin Users</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/account">Admin Account</NavLink>
                    </li>
                  </>
                ) : null  
              }
            </ul>
          </div>
        </div>
        {
          status !== "authenticated" ? (
            <Link to="/login" className='float-end mx-3 text-primary text-center border-0 btn btn-link text-decoration-none'>
              <FaDoorOpen /> Login
            </Link> 
          ) : (
            <button onClick={doLogout} className='float-end mx-3 text-danger text-center border-0 btn-link text-decoration-none bg-transparent'>
              <FaDoorClosed /> Logout
            </button> 
          )
        }
      </nav>
    </>
  )
}