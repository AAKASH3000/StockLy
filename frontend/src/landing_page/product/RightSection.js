import React from 'react';
import {Link} from 'react-router-dom';

function RightSection({ imageUrl,productName,productDesription,link1}) {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row ">
                
                <div className="col p-5 mt-5 ms-5">
                <h1 className="mb-3 mt-5">{productName}</h1>
                <p className="text-muted">{productDesription}</p>
                <br></br>
                <Link to={link1} style={{textDecoration:"none"}}>Learn More&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
                </div>

                <div className="col ">
                <img src={imageUrl} style={{width:"100%"}}></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;