import Axios from '../plugins/axios';
export default async function getCountry(){
    try {
        const responce = await Axios.get(`/location/get-countries`)
        return Object.values(responce.data)
    } catch (error) {
        return Promise.reject(error)
    }
}