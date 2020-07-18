import React from 'react';

// export default function ServerName() {
//     return(
//         <div>Olá</div>
//     )
// }

import { Container, HashtagIcon, Title, Separator, Description } from './styles';


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