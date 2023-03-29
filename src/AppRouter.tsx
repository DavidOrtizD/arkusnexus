import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './login/LoginPage';
import { UserAdminPage } from './userAdmin';
import { AccountAdminPage } from './accountAdmin';
import { RegisterPage } from './register/RegisterPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={ <LoginPage />} />
      <Route path="register" element={ <RegisterPage />} />
      <Route path="admin/user" element={ <UserAdminPage />} />
      <Route path="admin/account" element={ <AccountAdminPage />} />

      <Route path="/*" element={ <Navigate to="/login" />} />
    </Routes>
  )
}