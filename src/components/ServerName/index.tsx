import React from 'react';

import { Container, Title, ExpandIcon } from './styles';

const ServerName: React.FC = ( ) => {
    return (
        // Configurações estruturais do nome do servidor
        <Container>
            <Title>Servidor do Lenhador</Title>
            <ExpandIcon />
        </Container >
    );
};

export default ServerName;