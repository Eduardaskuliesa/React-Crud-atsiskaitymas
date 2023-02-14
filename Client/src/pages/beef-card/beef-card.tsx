import React from 'react';
import {
  Stack, Typography, Button,
  Rating,
} from '@mui/material';
import BeefModel from 'models/beef-model';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import Img from '../../components/ui/img';
import * as Styled from './styled';

type BeefModelProps = BeefModel;

const BeefCard: React.FC<BeefModelProps> = ({
  price,
  cut,
  img,
  rating,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <Stack sx={{ boxShadow: 3 }}>
      <Img src={img[0]} sx={{ aspectRatio: '1.42', width: 1 }} />
      <Styled.ContentWrapper>
        <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>{cut}</Typography>
        <Typography component="h3">{price}</Typography>
      </Styled.ContentWrapper>
      <Styled.ButtonContainer>
        <Button><ShoppingCartIcon /></Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => (navigate(routes.BeefPage.createLink(id)))}
        >
          ABOUT

        </Button>
        <Rating defaultValue={rating} precision={0.5} readOnly />
      </Styled.ButtonContainer>
    </Stack>

  );
};

export default BeefCard;
