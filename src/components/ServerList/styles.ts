import styled from "styled-components";
 
export const Container = styled.div`
/* Configurações estruturais do container da lista de servidores */
  grid-area: SL;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;
  
  max-height: 100vh;
  overflow-y: scroll;
  
  ::-webkit-scrollbar{
    display: none;
  }
`;
export const Separator = styled.div`
  /* Configurações visuais separando os servidores e a home da aplicação */
  width: 32px;
  border-bottom:2px solid var(--quaternary);

  margin-bottom: 8px;

`;
