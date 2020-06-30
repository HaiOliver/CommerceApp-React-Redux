import React from 'react';
import  './directory.component.scss';
import MenuItem from '../menu-items/menu-item.component'
// import 2 thing to use in redux
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
//==================================

// import directory.selector -> remove class -> use function component
import {selectDirectorySections} from '../../redux/directory/directory.selectors'

const Directory =  ({sections})=> {

        return (
            <div className="directory-menu">
                {/* use map to render each section */}
                {sections.map(({id, ...otherSectionProps}) => 
                    <MenuItem key={id} {...otherSectionProps}/>
                )}
                
            </div>
        )



}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})




export default connect(mapStateToProps)(Directory);