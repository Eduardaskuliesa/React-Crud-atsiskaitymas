import React from 'react';
import {
  Stack, Typography, TextField, Box, Button,
} from '@mui/material';
import * as Styled from './styled';

import ImagesField from './images-field';

type HouseFormPageProps = {
  mode?: 'create' | 'edit'
};
const BeefFormPage:React.FC<HouseFormPageProps> = () => (

  <Styled.Container>
    <Box component="form">
      <Styled.Paper elevation={4}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>Add Beef</Typography>
        <Stack sx={{ gap: 2, mt: 2 }}>
          <TextField label="Cut" fullWidth variant="filled" />
          <Box>
            <Typography variant="subtitle1" sx={{ pl: 1 }}>Farm</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField label="Country" fullWidth variant="filled" />
              <TextField label="Name" fullWidth variant="filled" />
            </Box>
          </Box>
          <ImagesField />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField label="Price" fullWidth variant="filled" />
            <TextField label="Rating" fullWidth variant="filled" />
          </Box>

          <Stack display="flex">
            <Button variant="contained" type="submit" color="primary">Create</Button>
          </Stack>
        </Stack>
      </Styled.Paper>
    </Box>
  </Styled.Container>
);

export default BeefFormPage;
