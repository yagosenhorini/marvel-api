import styled from 'styled-components';

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
  padding-top: 5%;
  list-style: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px){
      padding: 0;
  }
`;

export const HeaderListItem = styled.li`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content:center;
  @media screen and (min-width: 1024px){
      width: 20%;
      margin: 20px auto;
  }
`;

export const HeaderLogo = styled.img`
  width: 100%;
  height: auto;
`;