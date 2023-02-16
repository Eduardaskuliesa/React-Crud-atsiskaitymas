import React from 'react';
import {
  Box, Stack, IconButton, Typography, TextField, InputAdornment, Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ImagesField = () => (
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
);

export default ImagesField;
