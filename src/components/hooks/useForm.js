const { useState } = require("react");

export function useForm(initValues, submitHandler) {
    const [values, setValues] = useState(initValues);

    function changeValues(e) {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    function onSubmit(e){
        e.preventDefault();
        submitHandler(values);
    }

    return [
        values,
        changeValues,
        onSubmit
    ];
}