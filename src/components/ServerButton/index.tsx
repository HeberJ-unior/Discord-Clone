import React from 'react';

import Logo from '../../assets/Logo.svg'

import { Button } from './styles';


// Gonfigurando uma interface de cada servidor
export interface Props { 
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;

}


// Configurações estruturais de cada botão de servidor
const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
    return(
      <Button
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected ? 'active' : ''}


      >
        {isHome && <img src={Logo} alt= "Rocketseat"/>}
      </Button>
    )

};

export default ServerButton;