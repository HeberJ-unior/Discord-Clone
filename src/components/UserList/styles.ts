import styled from 'styled-components';

export const Container = styled.div`
    /* Configurações visuais do container de usuários */
    grid-area: UL;

    display: flex;
    flex-direction: column;
    
    padding: 3px 6px 0 16px;
    background-color: var(--secondary);
    
    max-height: (100vh - 46px);
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
        
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
        
    }

`;

export const Role = styled.div`
/* Configuração das categorias de usuáros: Online e Offline */
    margin-top: 20px;
    
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
`;

export const User = styled.div`
/* configuração da aparencia dos usuários dentro da UserList */
    margin-top: 5px;
    padding: 5px;

    display: flex;
    align-items: center;

    cursor: pointer;
    
    border-radius: 4px;
    background: transparent;

    transition: background .2s;
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    > strong {
        margin-left: 13px;
        font-weight: 500;
        color: var(--white);
        opacity: 0.7;
        /* Configuração para nomes muito grandes que não cabem na tela */
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    > span { 
        /* configuração da tag de bot quando existente */
        margin-left: 9px;

        background-color: var(--discord);
        color: var(--white);
        border-radius: 4px;
        padding: 4px 5px;
        
        text-transform: uppercase;
        font-weight: bold;
        font-size: 11px
        
    }
`;

export const Avatar = styled.div`
    flex-shrink: 0; /*Evita de deformar o avatar*/
    width: 32px;
    height: 32px;
    
    border-radius: 50%;
    background-color: var(--primary);
    
    &.bot {
        background-color: var(--mention-detail);
        
    }


`;