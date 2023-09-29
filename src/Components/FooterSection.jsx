import React from 'react'
import './FooterSection.css'
import { Link } from 'react-router-dom'

function footer() {
    return (
        <div className='footer'>
            <div className="row ms-5 me-5">
                <div className="col  text-center">
                    <h3>CoinWatch</h3>
                    <p>2023</p>
                </div>
                <div className="col text-center">
                    <Link to={"https://min-api.cryptocompare.com/"} target='_blank' style={{textDecoration: 'none', color:'white'}}><p>CryptoCompare</p></Link>
                    <Link to={"https://www.blockchain.com/"} target='_blank' style={{textDecoration: 'none', color:'white'}}><p>BlockChain</p></Link>
                </div>
                
            </div>
            <p className='text-center m-3'>Data from CryptoCompare API</p>
        </div>
    )
}

export default footer