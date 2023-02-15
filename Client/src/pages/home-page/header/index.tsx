import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box component="header" sx={{ py: 3, px: 1 }}>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => navigate(routes.BeefFormPage)}
      >
        Add Beef
      </Button>
    </Box>
  );
};
export default Header;
