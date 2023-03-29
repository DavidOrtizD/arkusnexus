import { ImSpinner3 } from 'react-icons/im';
import './Spinner.css';
export const Spinner = () => {
  return (
    <>
      <div className="d-flex justify-self-center w-100 h-100 justify-content-center align-items-center position-absolute spinner-container">
        <ImSpinner3 className='loaderIcon bigIcon' />
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  )
}