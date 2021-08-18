import axios from 'axios'

const Api = axios.create({
    baseURL: "http://localhost:8000/v1"
});

export default Api