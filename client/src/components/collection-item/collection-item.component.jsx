import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component'
import './collection-item.scss';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
	const {  name, price, imageUrl } = item
	return (
	<div className="collection-item">
		<div className="image"
        
            style={{backgroundImage:`url(${imageUrl})`}}>

            
        </div>
		<div className="collection-footer">
			<span className="name">{name}</span>
			<span className="price">{price} </span>
		</div>
		<CustomButton inverted onClick={()=> addItem(item)}>ADD TO CART</CustomButton>
	</div>
)};

const mapDispatchToProps = displatch => {
	return {
		addItem: item => displatch(addItem(item)) 
	}
}

export default connect(null, mapDispatchToProps)(CollectionItem);