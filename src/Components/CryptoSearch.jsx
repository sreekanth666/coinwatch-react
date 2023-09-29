import React, { useState, useEffect } from 'react'
import { TextField } from '@mui/material'
import './CryptoSearch.css'
import coinGeckoSearchAxiosInstance from '../coinGeckoSearchAxiosInstance'
import { Link } from 'react-router-dom';

function CryptoSearch() {
    const [fetchCustomFullURL, setFetchCustomURL] = useState('');
    const [cryptoSymbol, setCryptoSymbol] = useState('');
    const [cryptoCustomDetails, setCryptoCustomDetails] = useState([]);

    const handleInput = (e) => {
        const value = e.target.value;
        setCryptoSymbol(value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        const customURL = `/by/symbol?asset_symbol=${cryptoSymbol}`;
        setFetchCustomURL(customURL);
    };
    console.log(`Custom URL ${fetchCustomFullURL}`);
    console.log(cryptoCustomDetails);
    useEffect(() => {
        const fetchCustomData = async () => {
            try {
                const { data } = await coinGeckoSearchAxiosInstance.get(fetchCustomFullURL);
                setCryptoCustomDetails(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (fetchCustomFullURL) {
            fetchCustomData();
        }
    }, [fetchCustomFullURL]);

    return (
        <div className='container searchCrypto'>
            <h3 className='subHeading'>Search cryptocurrencies</h3>
            <TextField id="outlined-basic" helperText="Example: BTC, ETH, SOL, ASD" label="Enter Symbol" onChange={handleInput} variant="outlined" className='w-100' />
            <button type="button" className="btn w-100" onClick={handleSearch}>Search</button>
            {
                Object.keys(cryptoCustomDetails).length > 0 &&
                (
                    <>
                        <div className="border rounded p-3">
                            <div className="row">
                                <img src={`${cryptoCustomDetails.Data.LOGO_URL}`} className='img-fluid mx-auto' style={{width: '150px'}} alt="" />
                                <h5 className='text-center'>{`${cryptoCustomDetails.Data.NAME}`}</h5>
                            </div>
                        </div>
                                <table className="table border">
                                    <thead>
                                        <tr>
                                        <th className='text-center'>Symbol</th>
                                        <td>{`${cryptoCustomDetails.Data.SYMBOL}`}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th className='text-center'>Description</th>
                                        <td>{`${cryptoCustomDetails.Data.ASSET_DESCRIPTION_SUMMARY}`}</td>
                                        </tr>
                                        <tr>
                                        <th className='text-center'>Type</th>
                                        <td>{`${cryptoCustomDetails.Data.ASSET_TYPE}`}</td>
                                        </tr>
                                        <tr>
                                        <th className='text-center'>Website</th>
                                        <td><Link to={`${cryptoCustomDetails.Data.WEBSITE_URL}`} target='_blank'>{`${cryptoCustomDetails.Data.WEBSITE_URL}`}</Link></td>
                                        </tr>
                                        <tr>
                                        <th className='text-center'>Circulating Supply</th>
                                        <td>{`${cryptoCustomDetails.Data.SUPPLY_CIRCULATING}`}</td>
                                        </tr>
                                    </tbody>
                                </table>
                    </>
                )
            }
        </div>
    )
}

export default CryptoSearch