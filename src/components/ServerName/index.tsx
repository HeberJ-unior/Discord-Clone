import React from 'react';

// export default function ServerName() {
//     return(
//         <div>Olá</div>
//     )
// }

import { Container, Title, ExpandIcon } from './styles';


const ServerName: React.FC = ( ) => {
    return (
        <Container>
            <Title>Servidor do Lenhador</Title>
            <ExpandIcon />
        </Container >
    );
};

export default ServerName;