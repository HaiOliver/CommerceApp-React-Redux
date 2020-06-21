import React from 'react';
import {Link} from 'react-router-dom';
import './header.component.scss';
// auth here => sign out 
import {auth} from '../../fireBase/firebase.utils'
//import connect => higher-order component => take component as argument
import {connect} from 'react-redux'; 
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


// ================================= START CODING HERE=========================

const Header = ({currentUser, hidden}) => {
    
    return (
    
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
            <CartIcon/>
            {
                hidden ? null : <CartDropdown/>
            }
            

        </div>
    </div>
)}

//first argemunet of connect() => connect redux
// state -> link root-reducer.js => object
const MapStateToProps = ({user:{currentUser},cart:{hidden}}) => {
   console.log("currentUser: ",currentUser)
   console.log("hidden: ", hidden)
   return { currentUser:currentUser,
    hidden:hidden }
}

export default connect(MapStateToProps)(Header);
// export default Header;