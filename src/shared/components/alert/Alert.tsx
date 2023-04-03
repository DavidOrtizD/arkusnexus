import { AlertType } from './alert.interface';
import './alert.css';

export const Alert = (props: {type: AlertType, content: string}) => {
  const {type, content} = props;

  const getAlertType = (type: AlertType) => {
    switch (type) {
      case AlertType.error:
        return 'alert-danger';
        break;
      
        case AlertType.info:
        return 'alert-info';
        break;
    
      default:
        return 'alert-success';
        break;
    }
  }

  return (
    <>
      <div className="d-flex justify-self-center w-100 h-100 justify-content-center align-items-start position-absolute alert-container">
        <div className={`alert w-100 ${getAlertType(type)}`} role="alert">
          {content}
        </div>
      </div>
    </>
  )
}