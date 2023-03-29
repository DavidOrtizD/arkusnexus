import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './login/LoginPage';
import { RegisterPage } from './register/RegisterPage';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={ <LoginPage />} />
      <Route path="register" element={ <RegisterPage />} />
      <Route path="/*" element={ <Navigate to="login" /> } />
    </Routes>
  )
}