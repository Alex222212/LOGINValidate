import Axios from '../plugins/axios';
export default async function authLog(email, password,nickname,first_name, last_name,phone, gender_orientation, city, country, date_of_birth_day, date_of_birth_month, date_of_birth_year){
    try {
        const responce = await Axios.post(`/auth/signup`,
        JSON.stringify({
            email, 
            password,
            nickname,
            first_name, 
            last_name,phone, 
            gender_orientation, 
            city, country, 
            date_of_birth_day, 
            date_of_birth_month, 
            date_of_birth_year
        })
        )
        return responce.data
    } catch (error) {
        return Promise.reject(error)
    }
}