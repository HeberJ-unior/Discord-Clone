import styled from 'styled-components';

import { AlternateEmail } from 'styled-icons/material';


// confifurações visuáis da área que contém as mensagens e o input do chat
export const Container = styled.div`
    grid-area: CD;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: var(--primary);
`;

// configuração visual de cada mensagem presente no canal de mensagens
export const Messages = styled.div`
    padding: 20px 0;
    
    display: flex;
    flex-direction: column;
        
    max-height: calc(100vh - 46px - 68px);
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
        
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
        
    }
`;
// configuração visual do container de input de mensagens
export const InputWrapper = styled.div`
    width: 100%;
    
    padding: 0 16px;
    
`;
// configuração visual do input em si
export const Input = styled.input`
    width: 100%;
    height: 44px;
    
    padding: 0 10px 0 57px;
    border-radius: 7px;
    
    color: var(--white);
    background-color: var(--chat-input);
    
    position: relative;
    
    &::placeholder {
        color: var(--gray);
    }

    ~ svg {
        position: relative;
        top: -50%;
        left: 14px;
        transition: 180ms ease-in-out;
        

    }
`;

// Configuração visual do ícone de '@' antes do input
export const InputIcon = styled(AlternateEmail)`
    width: 24px;
    height: 24px;
    
    color: var(--gray);
    
`; 