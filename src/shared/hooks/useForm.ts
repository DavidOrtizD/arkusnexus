import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {} as any, formValidations = {} as any) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({} as any);

    useEffect(() => {
        createValidators();
    }, [ formState ])
    
    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])


    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        
        const formCheckedValues = {} as any;
        console.log("works")
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];
            if(typeof fn === "function"){
              formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
            } else if(typeof fn === "object" && fn[0] === "verifyEmail" && fn[1].length > 0) {
              formCheckedValues[`${ formField }Valid`] = formState[formField] === formState[fn[1]] ? null : errorMessage
            }
            
        }

        setFormValidation( formCheckedValues );
    }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}