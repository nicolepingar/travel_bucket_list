import axios from 'axios';

const front = process.env.API_FRONT;
const end = process.env.API_END;

const search = async (query) =>
    axios.get(`${front}${query}${end}`);


export default { search };