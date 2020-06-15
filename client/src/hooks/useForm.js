// write your custom hook here to control your checkout form
import React, { useState } from 'react';
    const useForm = ( initialValue ) => {
        const [ showSuccessMessage, setShowSuccessMessage ] = useState( false );
        const [ values, setValues ] = useState( initialValue );
        const [ order, setOrder ] = useState ({});

        const handleChanges = (e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            setShowSuccessMessage(true);
            setOrder(values)
            setValues(initialValue)
            console.log('Success')
         }
         return [showSuccessMessage, values, setValues, handleChanges, handleSubmit, order]
    }

    export default useForm;

