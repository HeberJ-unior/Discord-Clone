import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

// Configuração visual do container de informações do usuário
export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

// subdividindo em informações do usuário e funções de usuário
export const Profile = styled.div`\
  display: flex;
  align-items: center;
`;

// Configurando visuais do avatar do usuário
export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  
  background-color: var(--gray);

`;

// Configurações visuais das informações do usuário
export const UserData = styled.div`
  margin-left: 8px ;
  
  display: flex;
  flex-direction: column;
  
  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
  }

  > span{
    font-size: 13px;
    color: var(--gray);
    opacity: .7;

    cursor: pointer;
    transition: opacity .2s;

    &:hover {
      opacity: 1;
      
    }

  }
`;

// subdividindo em informações do usuário e funções de usuário
export const Icons = styled.div`
  display: flex;
  align-items: center;
  
  > svg:not(:first-child){
    margin-left: 7px;
  }
`;

// Configurações visuais do ícone de micofone
export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;
  
  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: opacity .2s;
  &:hover {
    opacity: 1;
    
  }
`;

// Configurações visuais do ícone de headphone
export const HeadphoneIcon = styled(Headset)`
  
  width: 20px;
  height: 20px;
  
  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: opacity .2s;
  &:hover {
    opacity: 1;
    
  }
`;

// Configurações visuais do ícone de configurações
export const SettingsIcon = styled(Settings)`
width: 20px;
  height: 20px;
  
  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: opacity .2s;
  &:hover {
    opacity: 1;
    
  }
`;