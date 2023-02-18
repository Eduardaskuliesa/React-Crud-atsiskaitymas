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

const deleteBeef = async (id: string | number) => {
  const { data } = await api.delete(`beef/${id}`);

  return data;
};
const postBeef = async (beefData: Omit<BeefModel, 'id'>) => {
  await api.post('/beef', {
    cut: beefData.cut,
    farm: {
      country: beefData.farm.country,
      name: beefData.farm.name,
    },
    images: beefData.images,
    price: beefData.price,
    rating: beefData.rating,
  });
};

const ApiServices = {
  fetchBeefs,
  fetchBeef,
  deleteBeef,
  postBeef,
};
export default ApiServices;
