import Axios from '../plugins/axios';
 export default async function Auth(email, password){
    try {
        const responce = await Axios.post(`/auth/login`,
        JSON.stringify({
            email,
            password,
        })
        )
        return responce.data
    } catch (error) {
        return Promise.reject(error)
    }
 }