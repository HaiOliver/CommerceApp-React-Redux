import React from 'react';
import {Link} from 'react-router-dom';
import './header.component.scss';
// auth here => sign out 
import {auth} from '../../fireBase/firebase.utils'
//import connect => higher-order component => take component as argument
import {connect} from 'react-redux'; 
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';


// ================================= START CODING HERE=========================

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

//first argemunet of connect() => connect redux
// state -> link root-reducer.js => object
const MapStateToProps = (state) => ({
    currentuser: state.user.currentUser
})

export default connect(MapStateToProps)(Header);