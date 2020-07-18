import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}


const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
    return (
        <User>
            <Avatar />
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Lenhad0r_Suad0" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Zé" isBot/>


        </Container >
    );
};

export default UserList;