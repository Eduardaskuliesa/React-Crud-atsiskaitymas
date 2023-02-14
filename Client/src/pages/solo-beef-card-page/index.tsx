import BeefModel from 'models/beef-model';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ApiServices from 'services/api-services';
import routes from 'navigation/routes';
import { Box } from '@mui/material';
import SoloBeefCard from './solo-beef-card';

const BeefPage = () => {
  const { id } = useParams();

  const [beef, setBeef] = React.useState<BeefModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedBeef = await ApiServices.fetchBeef(id);

        setBeef(fetchedBeef);
      })();
    }
  }, [id]);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box component="pre">
      {beef && <SoloBeefCard {...beef} />}
    </Box>
  );
};

export default BeefPage;
