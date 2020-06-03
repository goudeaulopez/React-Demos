import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 0e19047703e4f95b26885cd62083353dc7f9548756df20a81afe9a08e4f842c7'
    }
})