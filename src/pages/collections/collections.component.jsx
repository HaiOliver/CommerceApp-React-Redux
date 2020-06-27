import React from 'react';
import './collections.styles.scss'
// need connect -> redux
import {connect} from 'react-redux';
// need shop-selector -> {selectCollection} 
import {selectCollection} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({collection}) => {
    // console.log("object after map id ",collection)
    const {title, items} = collection; 
    return(
        <div className="collection-page"> 
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => 
                    <CollectionItem key={item.id} item={item}/>
                    )}
            </div>
         </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    // console.log("state will be: ", state)
    // console.log("ownProps: ",ownProps)
    return (
        {
            collection: selectCollection(ownProps.match.params.collectionId)(state)
        }
    )
}


export default connect(mapStateToProps)(CollectionPage);