import React from 'react';
import ApiServices from 'services/api-services';
import BeefModel from 'models/beef-model';
import BeefCard from '../beef-card/beef-card';
import * as Styled from './styled';

const HomePage = () => {
  const [beefs, setBeefs] = React.useState<BeefModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedBeefs = await ApiServices.fetchBeefs();
      setBeefs(fetchedBeefs);
    })();
  }, []);

  return (
    <Styled.BeefCardGrid>
      {beefs.map((beef) => <BeefCard key={beef.id} {...beef} />)}
    </Styled.BeefCardGrid>

  );
};

export default HomePage;
