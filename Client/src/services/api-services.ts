import axios from 'axios';
import BeefModel from 'models/beef-model';

const api = axios.create({
  baseURL: 'http://localhost:5007',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
const fetchBeefs = async () => {
  const { data: fetchedBeefs } = await api.get<BeefModel[]>('/beef');

  return fetchedBeefs;
};

const ApiServices = {
  fetchBeefs,

};
export default ApiServices;
