import React from 'react';
import {Link} from "react-router-dom";
function OpeanAccount() {
    return ( 
        <div className='container p-5 text-center mb-5'>
             <div className='row'>
                <h1 className='mb-4'>Open a Zerodha account</h1>
                <p className=' mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to={"/Signup"} className='p-2 fs-5 btn btn-primary mb-5' style={{width:"20%", margin:"0 auto"}}>Sign up Now</Link>
             </div>
        </div>
     );
}

export default OpeanAccount;