import axios from 'axios';

const fetchALlUsers = () => {
    return axios.get('https://reqres.in/api/users?page=1');
};

export { fetchALlUsers };
