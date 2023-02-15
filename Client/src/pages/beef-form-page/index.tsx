import React from 'react';
import {
  Stack, Paper, Typography, TextField, Box, InputAdornment, Button, IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

type HouseFormPageProps = {
  mode?: 'create' | 'edit'
};
const BeefFormPage:React.FC<HouseFormPageProps> = () => (
  <Stack sx={{
    p: 2,
    py: { xs: 2, sm: 4, lg: 6 },
    alignItems: 'center',
  }}
  >
    <Paper
      elevation={4}
      component="form"
      sx={(theme) => ({
        p: 2,
        width: { sm: `calc(${theme.breakpoints.values.sm}px - ${theme.spacing(4)})` },
      })}
    >
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
        <Box>
          <Typography variant="subtitle1" sx={{ pl: 1 }}>Images</Typography>
          <Stack gap={2}>
            <TextField
              label="Image"
              fullWidth
              variant="filled"
              InputProps={{
                endAdornment: <InputAdornment position="end"><Button color="error"><DeleteIcon sx={{ fontSize: 27 }} /></Button></InputAdornment>,
              }}
            />
          </Stack>
          <IconButton>
            <AddCircleIcon color="success" sx={{ fontSize: 35 }} />
          </IconButton>
        </Box>
      </Stack>
    </Paper>
  </Stack>
);

export default BeefFormPage;
