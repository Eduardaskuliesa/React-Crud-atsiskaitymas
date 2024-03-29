import React from 'react';
import {
  Box, Stack, IconButton, Typography, TextField, InputAdornment,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import uniqid from 'uniqid';

const initImagesIds: string[] = [uniqid()];

const ImagesField = () => {
  const [imagesIds, setImagesIds] = React.useState<string[]>(initImagesIds);

  const addImageField = () => setImagesIds([...imagesIds, uniqid()]);
  const removeImageField = (id: string) => setImagesIds(imagesIds.filter((imgId) => imgId !== id));

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ pl: 1 }}>Images</Typography>
      <Stack sx={{ gap: 2 }}>
        {imagesIds.map((id) => (
          <TextField
            required
            key={id}
            name="images"
            label="Image"
            fullWidth
            variant="filled"
            InputProps={imagesIds.length > 1 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => removeImageField(id)}>
                    <DeleteIcon color="error" sx={{ fontSize: 27 }} />
                  </IconButton>
                </InputAdornment>
              ),
            } : undefined}
          />
        ))}
      </Stack>
      <IconButton onClick={addImageField}>
        <AddCircleIcon color="success" sx={{ fontSize: 35 }} />
      </IconButton>
    </Box>
  );
};

export default ImagesField;
