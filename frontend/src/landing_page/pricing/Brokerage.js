import React from 'react';
function Brokerage() {
    return ( 
        <div className='container p-5'>
            <div className='row '>
                <div className='col-8'>
                    <a href='' style={{textDecoration:"none"}}>
                        <h1 className='fs-3 mb-4 text-center text-primary'>Brokerage calculator</h1>
                    </a>
                    
                    <ul className='text-muted'>
                        <li class="mb-2">Call & Trade and RMS auto-squareoff: Additional charges of 250 + GST per order.</li>
                        <li class="mb-2">Digital contract notes will be sent via e-mail.</li>
                        <li class="mb-2">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li class="mb-2">For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li class="mb-2">For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li class="mb-2">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <a href='' style={{textDecoration:"none"}}>
                       <h1 className='fs-3 mb-4 text-center text-primary'>List of charges</h1>
                    </a> 
                </div>
            </div>
        </div>
     );
}

export default Brokerage;