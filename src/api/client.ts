import axios from "axios";

export const rootUrl = axios.create({
    baseURL: 'https://dummyjson.com'
})