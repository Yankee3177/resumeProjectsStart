import axios from 'axios';

export const bio = () => axios.get('/intro');