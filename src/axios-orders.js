import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-7fac3-default-rtdb.firebaseio.com/'
});

export default instance;