import { Routes, Route, Navigate } from 'react-router-dom';
import { AccountAdminPage } from './accountAdmin/pages/AccountAdminPage';
import { UserAdminPage } from './userAdmin/pages/UserAdminPage';
import { CreateUserPage } from './userAdmin/pages/CreateUserPage';

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="user/admin" element={ <UserAdminPage />} />
      <Route path="user/create" element={ <CreateUserPage />} />
      <Route path="account" element={ <AccountAdminPage />} />
      <Route path="/*" element={ <Navigate to="userInfo" /> } />
    </Routes>
  )
}