import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';
export { Mention } from './styles';


export interface Props {
    // Configurando uma interface de caracteristicas da mensagem
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;

}

const ServerName: React.FC<Props> = ({author, date, content, hasMention, isBot} ) => {
    return (
        //Configurações estruturais das mensagens 
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''}/>
            <Message>
                <Header>
                    <strong>{author}</strong>

                    {isBot && <span>Bot</span>}
                    
                    <time>{date}</time>

                </Header>

                <Content>{content}</Content>

            </Message>
        </Container >
    );
};

export default ServerName;