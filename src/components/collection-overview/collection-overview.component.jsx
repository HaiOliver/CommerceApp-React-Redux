import React from 'react';
import './collection-overview.style.scss'

import PreviewCollection from '../preview-collection/preview-collection.component'

// need -> use redux, reselect

import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

// need shop.selector -> remove class -> use function 
import {selectCollections} from '../../redux/shop/shop.selectors'

// ================================== START CODE HERE ============================
const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
                {/* <PreviewCollection title={title} items={items}/> */}
                {collections.map(({id, ...otherCollectionProps}) => {
                    return (<PreviewCollection key={id} {...otherCollectionProps}/>)
                })}
            </div>
)

const mapStateToProp = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProp)(CollectionsOverview);