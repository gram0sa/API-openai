import axios from 'axios';
const URL_API = "http://localhost:3001/api/prompt";

export const makeRequest = async (message)=> {
    const {data} = await axios.get(URL_API, message);
    return data
}