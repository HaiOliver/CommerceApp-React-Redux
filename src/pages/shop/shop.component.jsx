import React from 'react';
import SHOP_DATA from './2.2 shop.data.js'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        // const {title, items} = this.state.collections;
        return(
            <div className="shop-page">
                {/* <PreviewCollection title={title} items={items}/> */}
                {this.state.collections.map(({id, ...otherCollectionProps}) => {
                    return (<PreviewCollection key={id} {...otherCollectionProps}/>)
                })}
            </div>
        )
    }
    
}

export default ShopPage;