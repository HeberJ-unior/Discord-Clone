import React, {useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, {Mention} from '../ChannelMessage';

// configuração para rolar a tela para baixo em primeiro acesso à página
// configurações estruturais do chat de mensagens
const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />

                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />

                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                
                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                                <ChannelMessage
                    author="Zé"
                    date="21/07/2020"
                    content="Oi"
                />
                
                <ChannelMessage
                    author="Outro Zé"
                    date="21/07/2020"
                    content={
                        <>
                            <Mention>@Lenhad0r_Suad0</Mention>, me tira do Prata 4!!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />

            </InputWrapper>

        </Container >
    );
};

export default ChannelData;