import styled from 'styled-components';

interface IButton {
  active: boolean;
}

export const StyledLanguage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2px 0;
`;

export const StyledButton = styled.button<IButton>`
  padding: 4px 2px;
  margin-right: 10px;
  background-color: white;
  ${(props) =>
    props.active &&
    `background-color: #17589f; 
    color: white`}
`;

//background-color: ${(props) =>props.active ? '#17589f' : 'white'};
//color: ${(props) => (props.active ? 'white' : '')}
