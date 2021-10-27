import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const HeaderContainer = styled.header`
  background: linear-gradient(to bottom, #4a825a 0%, #6DA67B 100%);

  height: 3.5rem;

  border-bottom: solid 1px #4a825a;
  border-top: solid 1px #4a825a;

  box-shadow: 0px 10px 14px -7px #c5c5c5;
  box-sizing: content-box;

  display: flex;
  align-items: center;

  padding: 0rem 2rem;
  color: #fff;

  img {
    width: 163px;
    height: 40px;
  }

  p {
    margin-left: 2.6rem;
    padding: 0.25rem 0 0.25rem 2rem;

  }

  span {
    margin-left: auto;
    text-transform: capitalize;
    //Deixa primeira letra maiuscula
  }
`;

export const ButtonLogout = styled.button`
  box-shadow: inset 0px 1px 0px 0px #5cb274;
  background: linear-gradient(to bottom, #3b7d4e 5%, #5cb274 100%);
  border: 1px solid #3b7d4e;
  border-radius: 20px;
  margin-left: 15px;

  width: 40px;
  height: 40px;

  cursor: pointer;
  color: #ffffff;

  text-shadow: 0px 1px 0px #fff;
  &:hover {
    background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
    background-color: #0061a7;
  }
`;
