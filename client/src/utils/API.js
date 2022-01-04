import axios from 'axios';

const front = 'https://api.openweathermap.org/data/2.5/weather?q=';
const end = '&units=imperial&appid=a9b31e2cc7187fa5bbaaa233ca112989';

const search = async (query) =>
    axios.get(`${front}${query}${end}`);


export default { search };