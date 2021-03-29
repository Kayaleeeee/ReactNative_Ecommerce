import axios from 'axios'

export const BASE_CLIENTCALL_URL = 'https://dev.enkor.kr/api/';

export const clientInstance = axios.create({
    baseURL: BASE_CLIENTCALL_URL,
});
