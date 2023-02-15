import React from 'react';
import ApiServices from 'services/api-services';
import BeefModel from 'models/beef-model';
import { Container } from '@mui/system';
import BeefCard from '../beef-card/beef-card';
import * as Styled from './styled';
import Header from './header';

const HomePage = () => {
  const [beefs, setBeefs] = React.useState<BeefModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedBeefs = await ApiServices.fetchBeefs();
      setBeefs(fetchedBeefs);
    })();
  }, []);

  return (
    <Container>
      <Header />
      <Styled.BeefCardGrid>
        {beefs.map((beef) => <BeefCard key={beef.id} {...beef} />)}
      </Styled.BeefCardGrid>
    </Container>

  );
};

export default HomePage;
