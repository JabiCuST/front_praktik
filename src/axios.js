import axios from 'axios';

const instance = axios.create({
    baseUrl: "http://localhost:4444",
});

axios.get()

export default instance;