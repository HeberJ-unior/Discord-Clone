import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';


// Configurações estruturais da área de informações do usuário
const UserInfo: React.FC = ( ) => {
    return (
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>Lenhad0r_Suad0</strong>
                    <span>#4491</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </ Container >
    );
};

export default UserInfo;