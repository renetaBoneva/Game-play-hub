const { useState } = require("react");

export function useForm(initValues, submitHandler) {
    const [values, setValues] = useState(initValues);
    const [validationMsg, setValidationMsg] = useState({});
    const [isInteracted, setIsInteracted] = useState(initValues);
    const [isDisabled, setIsDisabled] = useState(false);

    function changeValues(e) {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
        setIsInteracted(state => {
            return state[e.target.name]
                ? state
                : ({ ...state, [e.target.name]: true });
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        if (!isDisabled) {
            submitHandler(values);
            setValues(initValues);
        }
    }

    function handleIsValid(e) {
        const tagName = e.target.name;

        setIsInteracted(state => {
            return state[e.target.name]
                ? state
                : ({ ...state, [e.target.name]: true });
        });

        setValidationMsg(newErrors => {
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
                    if (e.target.value.trim().length < 5) {
                        newErrors[e.target.name] = `Password should be at least 5 characters long!`;
                    } else {
                        delete newErrors[e.target.name];
                    }
                    break;
                case 'rePass':
                    if (e.target.value === '') {
                        newErrors[e.target.name] = `Repeat password is required!`;
                    } else if (e.target.value !== values.password) {
                        newErrors[e.target.name] = `Password mismatch!`;
                    } else {
                        delete newErrors[e.target.name];
                    }
                    break;
                default:
                    break;
            }

            return newErrors;
        });

        // If there is validation error, disable submit button
        setValidationMsg(validationMsg => {
            if (Object.keys(validationMsg).length === 0) {
                setIsDisabled(false);
            } else {
                setIsDisabled(true);
            }

            return validationMsg;
        })

        // If there is uninteracted input, disable submit button
        setIsDisabled(() => {
            if (Object.entries(isInteracted).every(x => x === true)) {
                return false;
            } else {
                return true;
            }
        })
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