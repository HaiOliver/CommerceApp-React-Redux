import React,{useState} from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.scss';
import CustomButton from '../custom-button/custom-button.component';

//======================redux part========================
import {googleSignInStart, emailSignInStart } from '../../redux/user/user.action'
import {connect} from 'react-redux';
const SignIn = ({emailSignInStart,googleSignInStart}) => {
	
	// use hook -> remove class && constructor	
	const [userCredentials, setCredentials] = useState({email: '',
														password: ''})
	const { email, password } = userCredentials;
	// trigger when form submit
	const handleSubmit = async (e) => {
		e.preventDefault();
		// execute line 91
		emailSignInStart(email,password)
		// use saga instead

	};

	//triggger when email, password
	const handleChange = (e) => {
		
		const { name, value } = e.target;
		setCredentials({...userCredentials,
			[name]: value
		});
	};

	
	
	
		return (
			<div className="sign-in">
				<h2> Oliver have already had a account</h2>
				<span>Sign in with your email and Password </span>

				<form onSubmit={handleSubmit}>
					<FormInput
						name="email"
						type="email"
						onChange={handleChange}
						label="email"
						value={email}
						required
					/>

					<FormInput
						onChange={handleChange}
						name="password"
						type="password"
						label="password"
						value={password}
						required
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
							{' '}
							{''}Sign In with Google{''}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: ()=> dispatch(googleSignInStart()),
	emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))

})



export default connect(null, mapDispatchToProps)(SignIn);
