import axios from 'axios'

axios.defaults.baseURL = 'https://centrocultural.run-eu-central1.goorm.io/';

//guarda o token no localStorage
//axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');