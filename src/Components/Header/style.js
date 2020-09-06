import styled from 'styled-components';

import {
  LazyImage
} from '../Image/styled';

export const Header = styled.header `
  width: 100%;
  height: 70px;
  color: white;
  background-color: black;
  @media screen and (min-width: 1024px){
      height: 100px;
  }
`;

export const HeaderList = styled.ul `
  display: flex;
  padding: 10px 0;
  list-style: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px){
      padding: 0;
  }
  .lazyload-wrapper {
    width: 50%;
    display: flex;
    align-content: center;
    justify-content:center;
    margin: 0 auto;
    @media screen and (min-width: 1024px){
      width: 30%;
      margin: 20px auto;
    }
    ${LazyImage}
  }
`;