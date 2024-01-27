import axios from "axios"
import { getItem} from "../helpers/cookie-storage";

axios.defaults.baseURL = 'http://localhost:3001/api'

axios.interceptors.request.use(confirm => {
    const token = getItem('token')
    const authorization = token ? `Token ${token}` : ''
    config.headers.Authorization = authorization
    return config

    // console.log(authorization)
})

export default axios