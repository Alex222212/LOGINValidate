import Axios from "axios";
import API_ENV from "../config/apiCongig"
 export default async function Auth(email, password){
    try {
        const responce = await Axios.post(`${API_ENV.apiUrl}/auth/login`,
        JSON.stringify({
            email,
            password,
        }),
        {
            headers:{
                'Content-Type':'application/json'
            }
        })
        return responce.data
    } catch (error) {
        return Promise.reject(error)
    }
 }