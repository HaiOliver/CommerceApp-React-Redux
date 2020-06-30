import React,{useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.actions'
import './sign-up.scss'

const SignUp = ({signUpStart}) => {
    // use hook -> remove class
    const [userCredentials, setUserCredential] = useState({
                                                    displayName:"",
                                                    email:"",
                                                    password:"",
                                                    confirmPassword:""  })
    const {email, password, displayName, confirmPassword} = userCredentials;
    // handleSubmit for Sign Up form
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        

        if(password !== confirmPassword){
            alert("Password and Confirpassword doesnot match, sign-up.component, line 25")
            return;
        }

        signUpStart({email,password,displayName})
        

    }

    // handle change for form 
    const handleChange = (e)=>{
        const {name, value} = e.target;

        setUserCredential({...userCredentials,
            [name]: value
        })
    }

   
        
        return(
            <div className="sign-up">
                <h2 className="title ">
                    I dont have a account
                </h2>
                <span>Sign Up  with your Email and Password</span>

                {/* MAIN THING TO CODE SIGN UP FORM */}
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput 
                        type="text"
                        value= {displayName}
                        onChange ={handleChange}
                        label="Name" 
                        required
                        name="displayName"
                    />
                    <FormInput 
                        type="email"
                        value= {email}
                        onChange ={handleChange}
                        label="Email Oliver !!" 
                        required
                        name="email"
                    />
                    <FormInput 
                        type="password"
                        value= {password}
                        onChange ={handleChange}
                        label="Password" 
                        required
                        name="password"
                    />
                    <FormInput 
                        type="password"
                        value= {confirmPassword}
                        onChange ={handleChange}
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

const mapDispatchToProps = dispatch => ({
    signUpStart : (userCredentials) => dispatch(signUpStart(userCredentials))
}) 

export default connect(null, mapDispatchToProps)(SignUp);