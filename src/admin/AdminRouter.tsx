import { Routes, Route, Navigate } from 'react-router-dom';
import { AccountAdminPage } from './accountAdmin/pages/AccountAdminPage';
import { UserAdminPage } from './userAdmin/pages/UserAdminPage';

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="user" element={ <UserAdminPage />} />
      <Route path="account" element={ <AccountAdminPage />} />
      <Route path="/*" element={ <Navigate to="user" /> } />
    </Routes>
  )
}