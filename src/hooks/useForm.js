const { useState } = require("react");

export function useForm(initValues, submitHandler) {
    const [values, setValues] = useState(initValues);
    const [validationMsg, setValidationMsg] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);

    function changeValues(e) {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    function onSubmit(e) {
        e.preventDefault();
        submitHandler(values);
        setValues(initValues);
    }

    function handleIsValid(e) {
        const tagName = e.target.name;

        let newErrors = validationMsg;

        switch (tagName) {
            case "email":
                const regexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

                if (e.target.value.trim().length === 0) {
                    newErrors[e.target.name] = `Email is required!`
                } else if (!regexp.test(e.target.value)) {
                    newErrors[e.target.name] = `${e.target.value} is not a valid email!`;
                } else {
                    delete newErrors[e.target.name];
                }
                break;
            case "username":
                if (e.target.value.trim().length < 3) {
                    newErrors[e.target.name] = `Username should be at least 3 characters long!`;
                } else {
                    delete newErrors[e.target.name];
                }
                break;
            case 'password':
            case 'rePass':
                if (e.target.value.trim().length < 5) {
                    newErrors[e.target.name] = `Password should be at least 5 characters long!`;
                } else if (e.target.value !== values.rePass || e.target.value !== values.password) {
                    newErrors[e.target.name] = `Password mismatch!`;
                } else {
                    delete newErrors[e.target.name];
                }
                break;
            default:
                break;
        }

        // if (newErrors !== validationMsg) {
            setValidationMsg(validationMsg);

            if (validationMsg == {}) {
                setIsDisabled(false);
            } else {
                setIsDisabled(true);
            }
        // }

        console.log("validationMsg -> ", validationMsg);
        console.log("newErrors -> ", newErrors);
        console.log('isDisabled -> ', isDisabled);

    }

    return {
        values,
        changeValues,
        onSubmit,
        validationMsg,
        handleIsValid,
        isDisabled
    };
}