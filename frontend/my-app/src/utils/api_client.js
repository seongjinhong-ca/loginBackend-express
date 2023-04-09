import axios from "axios";

let instance = null;

export const getInstance = () => {
    if(!instance){
        instance = axios.create({
            baseURL: process.env.REACT_APP_CHAT_APP_API,
        });
    }
    return instance;
}