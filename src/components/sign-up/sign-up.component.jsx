import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../fireBase/firebase.utils';
import './sign-up.scss'

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""            
        }
    }

    // handleSubmit for Sign Up form
    handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password, displayName, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Password and Confirpassword doesnot match, sign-up.component, line 25")
            return;
        }

        try{
            // create user with email password
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});

            // clean form
            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""   
            })
        }catch(e){
            console.log("canot sign up user, sign up.component.jsx, line 34 ",e.message)
        }

    }

    // handle change for form 
    handleChange = (e)=>{
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    render(){
        const {email, password, displayName, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title ">
                    I dont have a account
                </h2>
                <span>Sign Up  with your Email and Password</span>

                {/* MAIN THING TO CODE SIGN UP FORM */}
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        value= {displayName}
                        onChange ={this.handleChange}
                        label="Name" 
                        required
                        name="displayName"
                    />
                    <FormInput 
                        type="email"
                        value= {email}
                        onChange ={this.handleChange}
                        label="Email Oliver !!" 
                        required
                        name="email"
                    />
                    <FormInput 
                        type="password"
                        value= {password}
                        onChange ={this.handleChange}
                        label="Password" 
                        required
                        name="password"
                    />
                    <FormInput 
                        type="password"
                        value= {confirmPassword}
                        onChange ={this.handleChange}
                        label="ConfirmPassword" 
                        required
                        name="confirmPassword"
                    />

                    {/* Button */}
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;