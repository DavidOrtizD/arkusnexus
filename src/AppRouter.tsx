import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { AuthRouter } from './auth/authRouter';
import { AdminRouter } from './admin/AdminRouter';
import { UserInfopage } from './userInfoPage/UserInfoPage';

export const AppRouter = () => {
  
  const { status } = useSelector( (state: RootState) => state.auth );

  return (
    <Routes>
      <Route path="userInfo" element={<UserInfopage />} />
      {
        status !== "authenticated" ?  <Route path="/*" element={ <AuthRouter />} /> 
        : <Route path="/*" element={ <AdminRouter />} />
      }
    </Routes>
  )
}