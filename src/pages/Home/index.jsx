import React, { useEffect } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

const Home = () => {
  useEffect(async () => {
    await api.get('/fake');
  },[])
  return (
    <Container>
      <Content>
        <main>
          <h1>Finance</h1>
          <p>Melhor forma de gerenciar seus títulos em atraso.</p>
          <Link to="/consultar">
            <span>
              <FiLogIn />
            </span>
            <strong>Consultar títulos</strong>
          </Link>
        </main>
      </Content>
    </Container>
  );
};
export default Home;
