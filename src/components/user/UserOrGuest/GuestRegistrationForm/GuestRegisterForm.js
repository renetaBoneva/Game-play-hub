import { useForm } from "../../../../hooks/useForm";


export function GuestRegistrationForm() {
    const { values, changeValues, onSubmit, validationMsg, handleIsValid, isDisabled } = useForm({
        username: "",
    }, onGuestRegistrationHandler)

    console.log('TODO: Make onGuestRegistrationHandler()');
    function onGuestRegistrationHandler(data) {
        console.log(data);
    }

    return (
        <form onSubmit={onSubmit} id="guestRegistrationForm">

            <div className="inputWrapper">
                <label htmlFor="username" >Username</label>
                <input
                    name='username'
                    type="text"
                    value={values.username}
                    onChange={changeValues}
                    onBlur={handleIsValid}
                />
                {validationMsg.username && <p className="validationP">{validationMsg.username}</p>}
            </div>
            <input type="submit" value="LET'S PLAY!" disabled={isDisabled} />
        </form>);
}