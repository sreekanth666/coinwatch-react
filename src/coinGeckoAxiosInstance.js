import axios from "axios";

const coinGeckoAxiosInstance = axios.create({
    baseURL: "https://min-api.cryptocompare.com/data"
})

export default coinGeckoAxiosInstance