import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
    // criando os componentes presentes na interface do menu de canais
    channelName: String;
    selected?: boolean;

}

const ChannelButton: React.FC<Props> = ({channelName, selected }) => {
    // rearranjando os componentes  do menu de canais de texto
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                <HashtagIcon />
                <span>{channelName}</span>
            </div>

            <div>
                <InviteIcon />
                <SettingsIcon />
            </div>
        </Container >
    );
};

export default ChannelButton;