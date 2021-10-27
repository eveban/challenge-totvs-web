import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px;
  padding: 3px 2px;
  border: 2px solid #e5e5e5;
  border-radius: 4px;

  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(to bottom, #4a825a 0%, #418b56 100%);
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding: 0 20px;

  border: solid 1px #418b56;
  text-shadow: 0 -1px 0 #3b7d4e;
  box-shadow: inset 0 0 0 1px #5cb274;
`;
export const H3 = styled.h3`
  color: #fff;
  font-size: 16px;
`;

export const Form = styled.form`
  padding: 15px;

  label {
    margin-top: 10px;
    color: #72828b;
    font-size: 12px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const InputContainerBusca = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputBusca = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const Button = styled.button`
  width: 128px;
  height: 36px;
  margin-right: 10px;

  border: solid 1px #418b56;
  text-shadow: 0 -1px 0 #3b7d4e;
  box-shadow: inset 0 0 0 1px #5cb274;

  cursor: pointer;
  background-color: #cc0000;
  background: -webkit-linear-gradient(top, #4a825a 0%, #418b56 100%);
  border-radius: 4px;
  color: #ffffff;

  display: flex;
  justify-content: space-around;
  align-items: center;

  transition: background-color 0.4s;
`;

export const Input = styled.input`
  width: 256px;
  height: 36px;
  border-radius: 4px;
  margin-right: 10px;
  border: 1px solid #e5e5e5;
  padding: 10px;
  color: #72828b;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerGrid = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 20px;

`;