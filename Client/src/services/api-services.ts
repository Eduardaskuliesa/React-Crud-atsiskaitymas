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
  const { data } = await api.get<BeefModel[]>('/beef');

  return data;
};

const fetchBeef = async (id: string | number) => {
  const { data } = await api.get<BeefModel>(`/beef/${id}`);

  return data;
};

const ApiServices = {
  fetchBeefs,
  fetchBeef,

};
export default ApiServices;
