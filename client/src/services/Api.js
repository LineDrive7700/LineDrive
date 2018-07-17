import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: 'http://18.222.157.136:8081/'
    })
}