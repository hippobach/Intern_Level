// import axios from 'axios';
import axios from './customize-axios';

const fetchALlUsers = () => {
    return axios.get('/api/users?page=1');
};

export { fetchALlUsers };
