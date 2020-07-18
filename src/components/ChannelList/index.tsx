import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = ( ) => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </ Category>

            <ChannelButton channelName= "Chat-Livre"/>
            <ChannelButton channelName= "trabalho"/>
            <ChannelButton channelName= "cs"/>
            <ChannelButton channelName= "lol"/>
            <ChannelButton channelName= "valoranta"/>
            
        </Container >
    );
};

export default ChannelList;