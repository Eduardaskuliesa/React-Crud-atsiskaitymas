type BeefModel = {
  id: string,
  cut: string,
  farm: {
    country: string,
    name: string
  },
  images: string[],
  price: string
  rating: number
};

export default BeefModel;
