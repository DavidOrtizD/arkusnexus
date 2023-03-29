import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/arkus_logo.png';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/admin/user">Amin User</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/admin/account">Amin Account</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}