import styled from "styled-components";
 
// Configurações estruturais do container da lista de servidores
export const Container = styled.div`
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
// Configurações visuais separando os servidores e a home da aplicação
export const Separator = styled.div`
  width: 32px;
  border-bottom:2px solid var(--quaternary);

  margin-bottom: 8px;

`;
