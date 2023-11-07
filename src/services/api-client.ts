import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '6abb25ae7e7d4877a01b2a75e09ab872'
    }
})