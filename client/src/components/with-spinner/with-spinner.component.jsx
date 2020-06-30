import React from 'react';

import { SpinnerOverlay,SpinnerContainer} from './with-spinner.style';

// 2 layout -> function wrap in other function
const withSpinner = (WrappedComponent) => {
    // pass prop Loading -> argument
    const spinner = ({isLoading,...otherProps}) =>
                
        {
            // console.log("line 10, with-spinner.js, isLoading: ",isLoading)
            return (
            isLoading 
            ? <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
            : <WrappedComponent {...otherProps} />
        )}

    return spinner;
}
            

// const withSpinner = (WrappedComponent) => 
// ({isLoading,...otherProps}) => (
//             isLoading 
//             ? <SpinnerOverlay>
//                 <SpinnerContainer/>
//             </SpinnerOverlay>
//             : <WrappedComponent {...otherProps} />
//         )
    

export default withSpinner;