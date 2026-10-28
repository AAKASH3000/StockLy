import React from 'react';
import {Link} from 'react-router-dom';
function Hero() {
    return ( 
       <div className='container border-bottom mb-5 mt-5'>
          <div className='container text-center p-5'>
                <h1>Technology</h1>
                <h3 className='fs-5 text-muted mt-3'>Sleek,modern and intuitive trading platforms</h3>
                <p className='text-muted mt-4'>Check out our <Link style={{textDecoration:"none"}}>invesment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </Link> </p>
          </div>
       </div>
     );
}

export default Hero;