import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

// criando os componentes presentes na interface do menu de canais
export interface Props {
    channelName: String;
    selected?: boolean;

}

// rearranjando os componentes  do menu de canais de texto
const ChannelButton: React.FC<Props> = ({channelName, selected }) => {
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