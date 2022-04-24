import Axios from "axios";
import API_ENV from "../../config/apiCongig"
import interseptors from './axios'
const instance = Axios.create({
    baseURL: API_ENV.apiUrl,
    headers:
    {'Content-Type':'application/json'}
})
interseptors(instance)
export default instance