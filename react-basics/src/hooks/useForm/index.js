import React, { useState } from 'react';


const inputTypes = {
    cep: {
        regex: !/^\d{5}-?\d{3}$/,
        message: 'Invalid CEP'
    },
    email: {
        regex: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        message: 'Invalid Email'
    },
}

const useForm = (type) => {
    const [value, setValue] = useState({});
    const [error, setError] = useState('');

    const validate = () => {
        if (value.length === 0) {
            setError('Please fill the input.');
            return false;
        } else if (!inputTypes[type]?.regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    };

    const onChange = ({ target }) => {
        if (error) validate(target.value);
        setValue(target.value);
    };

    return {
        value,
        setValue,
        error,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value),
    };
};

export default useForm;
