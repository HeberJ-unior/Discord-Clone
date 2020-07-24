import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';


export const Container = styled.div`
    /* Configuração visual do container das informações do chat atual */
    grid-area: CI; 
    display: flex;
    align-items: center;
    
    padding: 0 17px;
    background-color: var(--primary);
    
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
    
`;

export const HashtagIcon = styled(Hashtag)`
    /* configuração visual do ícone de '#' antes do nome do chat atual */
    width: 24px;
    height: 24px;
    
    color: var(--symbol);
    
`;

export const Title = styled.h1`
    /* Configuração visual do título do chat atual */
    margin-left: 9px;
    
    font-size: 16px;
    font-weight: bold;
    
    color: var(--white);

`;

export const Separator = styled.div`
    /* Configuração visual da separação entre o título do chat e a descrição do chat atual */
    height: 24px;
    width: 1px;

    background-color: var(--white);
    opacity: 0.2;
    
    margin: 0 13px;
    
`;

export const Description = styled.span`
    /* Configuração visual da descrição do chat atual */
    font-size: 15px;
    color: var(--gray);
    
`;