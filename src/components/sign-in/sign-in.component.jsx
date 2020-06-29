import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.scss';
import CustomButton from '../custom-button/custom-button.component';

//======================redux part========================
import {googleSignInStart, emailSignInStart } from '../../redux/user/user.action'
import {connect} from 'react-redux';
class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	// trigger when form submit
	handleSubmit = async (e) => {
		e.preventDefault();
		const {email, password} = this.state;
		const {emailSignInStart} = this.props;
		// execute line 91
		emailSignInStart(email,password)
		// use saga instead
		// try{

		// 	await auth.signInWithEmailAndPassword(email, password);
		// 	this.setState({
		// 		email: ' ',
		// 		password: ' '
		// 	});

		// }catch(e){
		// 	console.log("Sign in error, sign-in.component line 29 ", e.message)

		// }
		
	};

	//triggger when email, password
	handleChange = (e) => {
		
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		const { email, password } = this.state;
		const {googleSignInStart} = this.props;
		return (
			<div className="sign-in">
				<h2> Oliver have already had a account</h2>
				<span>Sign in with your email and Password </span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						onChange={this.handleChange}
						label="email"
						value={email}
						required
					/>

					<FormInput
						onChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: ()=> dispatch(googleSignInStart()),
	emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))

})



export default connect(null, mapDispatchToProps)(SignIn);
