import axios from 'axios';

const apiBuscaLetra = axios.create({
    baseURL: 'https://api.lyrics.ovh/v1/',
});

export default apiBuscaLetra;