import React from 'react';
import './menu-item.component.scss'

// import withRouter to impower MenuItem
import {withRouter} from "react-router-dom";


const MenuItem = ({title,imageUrl,size, history, linkUrl, match}) => (
    <div  className={`menu-item ${size}`} onClick={()=>{
        // link to item page
        console.log("match url will ",match.url);
        history.push(`${match.url}${linkUrl}`)
    }}>
                <div class="background-image" style={{backgroundImage:`url(${imageUrl})`}}>

                </div>
                <div className="content">
                    <h1 className="title"> {title}
                    </h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
)

export default withRouter(MenuItem);