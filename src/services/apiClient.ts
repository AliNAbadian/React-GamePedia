import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '5867f5d8976e484f87742d2b10756201'
        
    }
})