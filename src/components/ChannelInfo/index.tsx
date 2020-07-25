import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

// configuração estrutural das informações do chat atual.
const ChannelInfo: React.FC = ( ) => {
    return (
        <Container>
            <HashtagIcon />

            <Title>chat-livre</Title>
            <Separator />
            <Description>Canal aberto para conversa</Description>
        
        </Container >
    );
};

export default ChannelInfo;