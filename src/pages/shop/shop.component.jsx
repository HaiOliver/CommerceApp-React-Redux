import React from 'react';
import CollectionPageContainer from '../collections/collections.container';
import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container'


// ========================= Saga part =================================
import {fetchCollectionsStart} from '../../redux/shop/shop.actions'
// =========================== React Route ==================================
import { Route } from 'react-router-dom';
//============================ React Redux ================================
import {connect} from 'react-redux';



//==================================== START CODING HERE===============================
// transfrom from function -> class -> need componentdidMount
// Goal: firebase -> fetch collections -> object: {{},{},{}} 




class ShopPage extends React.Component {
    
   
    componentDidMount(){
        const {fetchCollectionsStart} = this.props
        // Async handle -> line 23, shop.actions.js
        fetchCollectionsStart()
            
    }    

    render(){
        const {match} = this.props
        return (
            <div className="shop-page">
                <Route 
                exact path={`${match.path}`} 
                // call with-spinner -> asyn -> fetch data from firebase
                // render() -> props: history, path
                component={CollectionsOverviewContainer}/>
                <Route 
                path={`${match.path}/:collectionId`} 
                
                component={CollectionPageContainer}/>
            </div>
        )
    }
}


const mapDispatchToProp = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    
})

export default connect(
    null,
    mapDispatchToProp)
    (ShopPage);