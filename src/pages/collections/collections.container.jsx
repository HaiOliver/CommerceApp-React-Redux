import {compose} from 'redux';

import {connect} from'react-redux';

import {createStructuredSelector} from 'reselect';

import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors'
import CollectionPage from './collections.component';
import withSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = 
    // original way
    // connect(mapStateToProps)(withSpinner(CollectionPage))
    compose(connect(mapStateToProps),withSpinner)(CollectionPage)
export default CollectionPageContainer;