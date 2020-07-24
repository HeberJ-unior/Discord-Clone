import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'


export const Container = styled.div`
/* configurando a estética da área de escolha de canais */
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    cursor: pointer;

    padding: 5px 3px;
    background-color: transparent;
    
    transition: background-color .2s;
    
    > div {
        display: flex;
        align-items: center ;
    }
    
    >div span {
        margin-left: 5px;
        color: var(--senary);
    }

    &:hover, &.active {
        background-color: var(--quinary);
        
        >div span{
            color: var(--white);
            
        }
    }
`; 
// configurações visuais do ícone de Hashtag
export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;
    
    color: var(--symbol);
    

`;
// configurações visuais do ícone de convite para o chat

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;
    
    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;
    
    &:hover{
        color: var(--white);
    }

`;
// configurações visuais do ícone de configurações

export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;
    
    margin-left: 3px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;
    
    &:hover{
        color: var(--white);
    }
`;