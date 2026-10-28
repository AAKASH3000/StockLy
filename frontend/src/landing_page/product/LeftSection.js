import React from "react";
import {Link} from 'react-router-dom';

function LeftSection({ imageUrl,productName,productDesription,link1,link2,
  googlePlay,
  appStore, }) {
  return (
    <div className="container p-5 mb-5">
      <div className="row ">
        <div className="col ">
          <img src={imageUrl} style={{width:"100%"}}></img>
        </div>
        <div className="col p-5 mt-2 ms-5">
          <h1 className="mb-3">{productName}</h1>
          <p className="text-muted">{productDesription}</p>
          <br></br>
          <Link to={link1} style={{textDecoration:"none"}}>Try demo&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to={link2} style={{textDecoration:"none"}}>Learn More&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true"></i> </Link>
          <br></br>
          <br></br>
          <a href="googlePlay"><img src="media\images\googlePlayBadge.svg" /></a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="appStore"><img src="media\images\appstoreBadge.svg" /></a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
