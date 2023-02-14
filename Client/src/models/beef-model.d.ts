type BeefModel = {
  id: number,
  cut: string,
  farm: {
    country: string,
    city: string
  },
  img: string[],
  price: string
  rating: number
};

export default BeefModel;
