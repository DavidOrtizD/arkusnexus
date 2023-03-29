import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';


export const useCheckAuth = () => {
  
    const { status } = useSelector( (state: RootState) => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {
        
        
    }, []);

    return status;
}