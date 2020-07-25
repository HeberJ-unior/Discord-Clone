import React from 'react';

import { Container, Role, User, Avatar } from './styles';

// Configuração de interface de cada usuário
interface UserProps {
    nickname: string;
    isBot?: boolean;
}


// Configuração estrutural da função BOT da lista de usuários
const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className= {isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

// Configuração estrutural da lista de usuários
const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Lenhad0r_Suad0" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Zé" isBot/>
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="a r i e l" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="fx_" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="Outro Zé" />
            <UserRow nickname="Outro Zé" />

        </Container >
    );
};

export default UserList;