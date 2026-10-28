import React from 'react';
import OpeanAccount from '../OpeanAccount';
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center border-bottom'>
                <h1 className='mb-5'>Pricing</h1>
                <h3 className='border-bottom pb-5 text-muted fs-4'>Free equity investments and flat ₹20 traday and F&O trades</h3>
                <div className='row mb-5'>
                    <div className='col-4 p-5'>
                        <img src='media\images\pricingMF.svg'  style={{width:"100%"}}/>
                        <h1 className='fs-3'>Free equity delivery</h1>
                        <p className='text muted'>All equity delivery investments (NSE, BSE),
are absolutely free - ₹ 0 brokerage.</p>
                    </div>
                    <div className='col-4 p-5 '>
                        <img src='media\images\intradayTrades.svg' style={{width:"100%"}}/>
                        <h1 className='fs-3'>Intraday and F&O trades</h1>
                        <p className='text muted'>Flat Rs. 20 or 0.03% (whichever is lower)
per executed order on intraday trades
across equity, currency, and commodity
trades.</p>
                    </div>
                    <div className='col-4 p-5'>
                        <img src='media\images\pricing0.svg' style={{width:"100%"}}/>
                        <h1 className='fs-3'>Free direct MF</h1>
                        <p className='text muted'>All direct mutual fund investments are
absolutely free - ₹ 0 commissions & DP
charges.</p>
                    </div>
                </div>
                <OpeanAccount />
            </div>
        </div>
     );
}

export default Hero;