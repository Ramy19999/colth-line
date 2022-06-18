import React from "react";
import SignUp from "../../components/sign-up/sign-up.componenet";
import './sign-in-and-sign-up.styles.scss';
import SingIn from "../../components/sign-in/sign-in.component";
const SignInAndSignUpPage = () => (
<div className="sign-in-and-sign-up">
    <SingIn/>
    <SignUp/>
</div>

);
export default SignInAndSignUpPage ;