import React from 'react';
import {
  Stack, Typography, Button,
  Rating, Box,
} from '@mui/material';
import BeefModel from 'models/beef-model';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import DangerousIcon from '@mui/icons-material/Dangerous';
import Img from '../../components/ui/img';
import * as Styled from './styled';

type BeefModelProps = BeefModel & {
  onDelete: VoidFunction
};

const BeefCard: React.FC<BeefModelProps> = ({
  price,
  cut,
  images,
  rating,
  id,
  onDelete,
}) => {
  const navigate = useNavigate();

  return (
    <Stack sx={{
      position: 'relative',
      boxShadow: 3,
    }}
    >
      <Img src={images[0]} sx={{ aspectRatio: '1.42', width: 1 }} />
      <Styled.AdminActions>
        <Button onClick={onDelete}><DangerousIcon fontSize="large" color="error" /></Button>
        <Button variant="contained" color="success" size="medium">UPDATE</Button>
      </Styled.AdminActions>
      <Styled.ContentWrapper>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>{cut}</Typography>
            <Typography component="h3">{price}</Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={() => navigate(routes.BeefPage.createLink(id))}
            >
              ABOUT

            </Button>
          </Box>
        </Box>
        <Styled.ButtonContainer>
          <Button><ShoppingCartIcon /></Button>
          <Rating defaultValue={rating} precision={0.5} readOnly />
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Stack>

  );
};

export default BeefCard;
