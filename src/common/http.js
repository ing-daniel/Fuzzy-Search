import Axios from "axios";

const base_url = "https://api.myjson.com/bins/"

export const _get=(url)=>{
    return Axios.get(`${base_url}${url}`);
}
export const _post = (url, body)=>{
    return Axios.post(`${base_url}${url}`,body);
}