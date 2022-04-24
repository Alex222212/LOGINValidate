let key = "key-app"
function setToken(res){
    const isLogin = res.config.url.includes('login')
    if(isLogin){
        const token = res.data.token
        localStorage.setItem(key, token)
    }
    return res
}

export default function(Axios){
    Axios.interceptors.response.use(setToken)
}