import styled from 'styled-components';
import { Add } from 'styled-icons/material';

// configuações visuais do menu de chats
export const Container = styled.div`
    grid-area: CL;
    display: flex;
    
    flex-direction: column;
    
    padding: 24px 9.5px 0 16px;
    background-color: var(--secondary) ;
    
`; 

// configuração visual de cada categoria de chat
export const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin-bottom: 6px;
    cursor: pointer;
    
    > span {
        text-transform: uppercase ;
        font-size: 12px;
        font-weight: 500px;
        color: var(--gray);
        
    }
`;

// configuração visual do ícone para adicionar mas um chat
export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;
    
    color: var(--symbol);
    cursor: pointer;
    


`;


