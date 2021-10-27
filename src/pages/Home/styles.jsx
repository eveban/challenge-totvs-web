import styled from 'styled-components';

import image from '../../assets/home-background.svg'

export const Container = styled.div`
  height: 70vh;
  background: url(${image}) no-repeat 730px;
  margin-top: 100px;
  margin-right: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 100px;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */

  main {
      flex: 1;
      max-width: 560px;

      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
          font-size: 48px;
          color: var(--title-color);
      }
      p {
          font-size: 18px;
          margin-top: 20px;
          line-height: 30px;
      }
      a {
          width: 100%;
          max-width: 360px;
          height: 72px;
          /* background: var(--primary-color); */
          background: #418b56;
          border-radius: 8px;
          text-decoration: none;

          display: flex;
          align-items: center;
          overflow: hidden;

          margin-top: 40px;
          span {
            display: block;
            background: rgba(0, 0, 0, 0.08);
            width: 72px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s;

            svg {
              color: #FFF;
              width: 20px;
              height: 20px;
            }
          }
          strong {
            flex: 1;
            text-align: center;
            color: #FFF;
          }
      }
      a:hover {
        background: #4a825a;
      }
  }
`;
