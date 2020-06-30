import CollectionsOverview from './collection-overview.component'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {compose} from 'redux';
import withSpinner from '../with-spinner/with-spinner.component';

//=================================coding=================================
const mapStateToProps = createStructuredSelector(
    {
        isLoading: selectIsCollectionFetching
    }
)

const CollectionsOverviewContainer = 
    //shortcut: read right -> left, pass CollectionsOverview in with-spinner 
    //  -> pass isLoading -> Spinner
    // connect(mapStateToProps)(WithSpinner(CollectionsOverview))
    compose (connect(mapStateToProps),withSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;

