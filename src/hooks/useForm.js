const { useState, useEffect } = require("react");

export function useForm(initValues, submitHandler) {
    const [values, setValues] = useState(initValues);
    const [validationMsg, setValidationMsg] = useState({});
    const [isInteracted, setIsInteracted] = useState(initValues);
    const [isDisabled, setIsDisabled] = useState(true);

    function changeValues(e) {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
        onInteractionHandler(e);

        //Edge case validation when repeat password is the last form input
        if (e.target.name === 'rePass') {
            setValidationMsg(prevErrors => {
                const newErrors = { ...prevErrors };

                if (e.target.value === '') {
                    newErrors[e.target.name] = `Repeat password is required!`;
                } else if (e.target.value !== values.password) {
                    newErrors[e.target.name] = `Password mismatch!`;
                } else {
                    delete newErrors[e.target.name];
                }
                return newErrors

            })
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        if (!isDisabled) {
            submitHandler(values);
            setValues(initValues);
        }
    }

    useEffect(() => {
        // If there is uninteracted input, disable submit button
        // If there is validation error, disable submit button
        setIsDisabled(() => {
            if (Object.keys(validationMsg).length === 0 && Object.values(isInteracted).every(x => x === true)) {
                return false;
            } else {
                return true;
            }
        })
    }, [isInteracted, validationMsg])

    function handleIsValid(e) {
        const tagName = e.target.name;

        onInteractionHandler(e);

        setValidationMsg(prevErrors => {
            const newErrors = { ...prevErrors };
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
                    } else if (values.rePass && values.rePass !== '' && e.target.value.trim() !== values.rePass) {
                        newErrors[e.target.name] = `Password mismatch!`;
                    }
                    else {
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
    }

    function onInteractionHandler(e) {
        setIsInteracted(state => {
            return state[e.target.name]
                ? state
                : ({ ...state, [e.target.name]: true });
        });
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