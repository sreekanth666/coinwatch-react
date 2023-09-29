const requests = {
        fetchCoinList: `coins/list`,
        fetch4ForBanner: `/pricemulti?fsyms=BTC,ETH,USDT,BNB&tsyms=INR`,
        fetch24hrChange: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`
}

export default requests;