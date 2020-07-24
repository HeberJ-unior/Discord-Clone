import React from 'react';

import Logo from '../../assets/Logo.svg'

import { Button } from './styles';


export interface Props { 
  // Gonfigurando uma interface de cada servidor
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;

}


const ServerButton: React.FC<Props> = ({
  // Configurações estruturais de cada botão de servidor
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