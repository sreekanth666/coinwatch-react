import axios from "axios";

const coinGeckoAxiosInstance = axios.create({
    baseURL: "https://data-api.cryptocompare.com/asset/v1/data/"
})

export default coinGeckoAxiosInstance