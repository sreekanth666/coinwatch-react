import React, { useEffect, useState } from 'react'
import './Banner.css'
import { Card } from '@mui/material'
import coinGeckoAxiosInstance from '../coinGeckoAxiosInstance';

function Banner({fetchDetailsBanner}) {
    console.log(fetchDetailsBanner);

    const [cryptoDetails, setCryptoDetails] = useState([])
    const fetchData = async() => {
        const {data} = await coinGeckoAxiosInstance.get(fetchDetailsBanner)
        console.log(data);
        setCryptoDetails(data)
    }

    console.log(cryptoDetails);
    useEffect (() => {
        fetchData()
    }, [])

    return (
        <div className='bgImg'>
            <div className='container cBanner'>
                <div className='test'>
                    <h1>Your Window to the <br />Crypto Universe</h1>
                    <button type="button" className="btn">Explore</button>
                    <div className='cCards row'>
                        <div className='col'><Card variant="outlined" className='cCard'>Bitcoin<br/>{`₹ ${cryptoDetails.BTC?.INR}`}</Card></div>
                        <div className='col'><Card variant="outlined" className='cCard'>Ethereum<br/>{`₹ ${cryptoDetails.ETH?.INR}`}</Card></div>
                        <div className='col'><Card variant="outlined" className='cCard'>Tether<br/>{`₹ ${cryptoDetails.USDT?.INR}`}</Card></div>
                        <div className='col'><Card variant="outlined" className='cCard'>Binance Coin<br/>{`₹ ${cryptoDetails.BNB?.INR}`}</Card></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner