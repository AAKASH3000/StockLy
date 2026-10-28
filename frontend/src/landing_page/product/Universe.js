import React from 'react';
import { Link } from 'react-router-dom';
function Universe() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center p-5'>
                <h1 className='mb-4'>The Zerodha Universe</h1>
                
                <p className='mb-5 pb-4'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='row  text-muted p-3'>
                    <div className='col'>
                        <img className='mb-3 mt-1' src='media\images\smallcaseLogo.png'style={{width:"40%"}}/>
                        <p>Thematic investment platform</p>
                    </div>
                    <div className='col'>
                        <img className='mb-3' src='media/images/streakLogo.png' style={{width:"35%"}}/>
                        <p>Algo & strategy platform</p>
                    </div>
                    <div className='col'>
                        <img className='mb-3 mt-1' src='media\images\sensibullLogo.svg' style={{width:"40%"}}/>
                        <p className='mt-2'>Options trading platform</p>
                    </div>
                </div>
                
                <div className='row  text-muted'>
                    <div className='col'>
                        <img className='mb-3' src='media\images\zerodhaFundhouse.png' style={{width:"40%"}}/>
                        <p>Asset management</p>
                    </div>
                    <div className='col'>
                        <img className='mb-3' src='media\images\goldenpiLogo.png' style={{width:"40%"}}/>
                        <p>Bonds trading platform</p>
                    </div>
                    <div className='col'>
                        <img className='mb-3' src='media\images\dittoLogo.png' style={{width:"30%"}}/>
                        <p></p>
                    </div>
                </div>

                <Link to={'/signup'} className='p-2 fs-5 btn btn-primary mb-5 mt-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</Link>
            </div>
        </div>
     );
}

export default Universe;