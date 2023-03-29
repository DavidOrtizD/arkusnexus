import { useSelector } from 'react-redux';
import './App.css';
import { AppRouter } from './AppRouter';
import { Navbar } from './shared';
import { RootState } from './store/store';
import { Spinner } from './shared/components/Spinner';

function App() {

  const { loading } = useSelector((state:RootState) => state.loading);
  
  return (
    <>
      <Navbar />
      <AppRouter />
      {
        loading ? <Spinner /> : null
      }
    </>
  )
}

export default App
