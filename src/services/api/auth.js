import axios from "axios";
import storage from '../storage';

const request = axios.create({
	baseURL: 'http://localhost:5004/api/auth'
});

request.defaults.headers.common['Authorization'] = `Bearer ${storage.get('token')}`;

export default { request };