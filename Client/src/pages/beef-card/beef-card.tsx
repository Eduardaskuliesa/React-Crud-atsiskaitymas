import React from 'react';
import {
  Stack, Typography, Button,
  Rating,
} from '@mui/material';
import BeefModel from 'models/beef-model';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Img from '../../components/ui/img';
import * as Styled from './styled';

type BeefModelProps = BeefModel;

const BeefCard: React.FC<BeefModelProps> = ({
  price,
  cut,
  img,
  rating,
}) => (
  <Stack sx={{ boxShadow: 3 }}>
    <Img src={img[0]} sx={{ aspectRatio: '1.42', width: 1 }} />
    <Styled.ContentWrapper>
      <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>{cut}</Typography>
      <Typography component="h3">{price}</Typography>
    </Styled.ContentWrapper>
    <Styled.ButtonContainer>
      <Button><ShoppingCartIcon /></Button>
      <Rating defaultValue={rating} readOnly sx={{ mr: 4 }} />
    </Styled.ButtonContainer>
  </Stack>

);

export default BeefCard;
