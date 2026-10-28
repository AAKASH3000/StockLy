import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <div className='container p-5 text-center mb-5'>
             <div className='row'>
                <img src='media\images\homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mb-5'>Invest in everythings</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <Link to={"/signup"} className='p-2 fs-5 btn btn-primary mb-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</Link>
             </div>
        </div>
     );
}

export default Hero;
<h1>Hero</h1>