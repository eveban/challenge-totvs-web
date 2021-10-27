import React from 'react';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { HeaderContainer } from './styles';

function Header() {
  const currentDate = format(new Date(), 'EEEEEE, dd-MM', {
    locale: ptBR,
  });

  return (
    <HeaderContainer>
      <p>Gerencimento de títulos em aberto</p>
      <span>{currentDate}</span>
    </HeaderContainer>
  );
}

export default Header;
