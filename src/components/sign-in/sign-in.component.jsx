import React from "react";
import './sign-in.styles.scss';
import CustomButton from "../custom-button/custom-button.componenet";
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
import FormInput from "../form-input/form-input.componenet";

class SingIn extends React.Component {
    constructor(props){
        super();
        this.state= {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();

        const {email , password} =this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
        } catch (error) {
            console.error(error);
        }

        this.setState({email:'',password:''})
    }
    handleChange = event =>{
        const {value , name }= event.target;
        this.setState({[name]: value})
    }
    render(){
        return(
        <div className="sign-in">
            <h2>i have already an account</h2>
            <span>sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput
                name="email" 
                type="email" 
                value={this.state.email} 
                handleChange={this.handleChange}
                label = 'email'
                required/>
                <FormInput 
                name="password" 
                type="password" 
                value={this.state.password} 
                handleChange={this.handleChange}
                label = 'password'
                required/>
                <div className="buttons">
                <CustomButton type='submit'>Sign In</CustomButton>
                <CustomButton onClick = {signInWithGoogle}  isGoogleSignIn>
                    {' '}
                    Google Sign{' '}
                    </CustomButton>
                    </div>
            </form>
        </div>
        )
    }
}
export default SingIn ;