import styled from 'styled-components';

export const HeroList = styled.ul `
	width: 90%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 20px auto;
	justify-content: space-between;
`;

export const HeroListItem = styled.li `
  width: 45%;
	display: flex;
  margin: 0 auto;
	cursor: pointer;
  flex-direction: column;
  @media screen and (min-width: 1024px){
    width: 30%;
  }
`;

export const HeroName = styled.h3 `
	font-size: 12px;
	text-align: center;
  font-family: Arial, sans-serif;
  @media screen and (min-width: 1024px){
    font-size: 14px;
  }
`;

export const HeroButton = styled.button `
	width: 100%;
	height: 30px;
	border: none;
	font-size: 12px;
	margin: 10px auto;
	font-weight: bold;
	border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  @media screen and (min-width: 1024px){
    width: 50%;
    font-size: 14px;
  }
`;
