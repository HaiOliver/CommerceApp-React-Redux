import React from 'react';
import {Link} from 'react-router-dom';
import './header.component.scss';
// auth here => sign out 
import {auth} from '../../fireBase/firebase.utils'
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className='logo'></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact"> CONTACT</Link>
            {currentUser ? 
            <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option" to='/signin'>SIGN IN</Link>
            }

        </div>
    </div>
)

export default Header;