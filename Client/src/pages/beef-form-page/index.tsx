import React from 'react';
import {
  Stack, Typography, TextField, Box, Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import BeefModel from 'models/beef-model';
import ApiServices from 'services/api-services';
import routes from 'navigation/routes';
import ImagesField from './images-field';
import * as Styled from './styled';

const formatValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const cut = formData.get('cut');
  const price = formData.get('price');
  const rating = formData.get('rating');
  const images = formData.getAll('images');
  const country = formData.get('country');
  const name = formData.get('name');

  if (cut === null || cut instanceof File || cut.length < 2) throw new Error('incorrect Cut');
  if (price === null || price instanceof File || price.length < 1) throw new Error('incorrect Price');
  if (rating === null || rating instanceof File || rating.length < 1) throw new Error('incorrect Rating');
  if (country === null || country instanceof File || country.length < 2) throw new Error('incorrect Country');
  if (name === null || name instanceof File || name.length < 2) throw new Error('incorrect Name');
  images.forEach((img, i) => {
    if (img instanceof File || img.length < 2) throw new Error(`incorrect Image nr: ${i + 1}`);
  });

  return {
    cut,
    farm: {
      country,
      name,
    },
    images: images as string[],
    price: `${Number(price).toFixed(2)}$`,
    rating: Number(rating),
  };
};

type HouseFormPageProps = {
  mode?: 'create' | 'edit'
};
const BeefFormPage:React.FC<HouseFormPageProps> = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const navigate = useNavigate();

  const postBeefData = async (beefData: Omit<BeefModel, 'id'>) => {
    await ApiServices.postBeef(beefData);
    navigate(routes.HomePage);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      postBeefData(values);
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };
  return (

    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>Add Beef</Typography>
        <Stack sx={{ gap: 2, mt: 2 }}>
          <TextField label="Cut" fullWidth variant="filled" name="cut" />
          <Box>
            <Typography variant="subtitle1" sx={{ pl: 1 }}>Farm</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField label="Country" fullWidth variant="filled" name="country" />
              <TextField label="Name" fullWidth variant="filled" name="name" />
            </Box>
          </Box>
          <ImagesField />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Price"
              fullWidth
              variant="filled"
              name="price"
              inputProps={{ step: '0.01' }}
              required
            />
            <TextField label="Rating" fullWidth variant="filled" name="rating" />
          </Box>

          <Stack display="flex">
            <Button variant="contained" type="submit" color="primary">Create</Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default BeefFormPage;
