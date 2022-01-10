import axios from "axios";


export const test = () => {
    return axios.get("http://localhost:5000");
}