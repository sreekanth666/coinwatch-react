import React from 'react'
import './PopularCrypto.css'
import coinGeckoAxiosInstance from '../coinGeckoAxiosInstance';
import { useState, useEffect } from 'react';

function PopularCrypto({fetchPopular}) {
    console.log(fetchPopular);

    const [popularCrypto, setPopularCrypto] = useState([])
    const fetchData = async() => {
        const {data} = await coinGeckoAxiosInstance.get(fetchPopular)
        console.log(data);
        const transformedData = Object.keys(data).map((key) => data[key]);
        setPopularCrypto(transformedData);
    }

    console.log(popularCrypto);
    const cryptoDetails  = popularCrypto[4]
    console.log(cryptoDetails);
    useEffect (() => {
        fetchData()
    }, [])
    const imgBaseURL = "https://www.cryptocompare.com/"
    return (
        <div className='container table'>
            <h3 className='subHeading'>Popular cryptocurrencies</h3>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Last Price</th>
                    <th scope="col">24Hr Change</th>
                    <th scope="col">Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Array.isArray(cryptoDetails) ?
                    cryptoDetails.map(items => {
                        console.log(items); // Log the items variable
                        return (
                            <tr>
                                <td><img src={`${imgBaseURL}${items.CoinInfo.ImageUrl}`} className='img-fluid' style={{height: '30px'}} alt="logo" />{'  '}{`${items.CoinInfo.FullName}`}<br />({`${items.CoinInfo.Internal}`})</td>
                                <td>{`${items.DISPLAY?.USD.PRICE}`}</td>
                                <td>{`${items.DISPLAY?.USD.CHANGE24HOUR}`}</td>
                                <td>{`${items.DISPLAY?.USD.MKTCAP}`}</td>
                            </tr>
                        );
                    }) :
                    console.log("Not array")
                }

                </tbody>
            </table>
        </div>
    )
}

export default PopularCrypto