import styled from 'styled-components';

export const Modal = styled.div`
  top: 25%;
  left: 10%;
  width: 80%;
  right: 10%;
  bottom: 25%;
  height: auto;
  transition: 0.45s;
  position: fixed;
  border-radius: 5px;
  border: 1px solid black;
  background-color: lightgray;
  transform: translateY(-200%);
  @media screen and (min-width: 1024px){
    left: 25%;
    right: 25%;
    width: 50%;
  }
  &.is--active{
    transform: translateY(0);
  }
`;

export const Name = styled.h3`
  width: 50%;
  font-size: 14px;
  text-align: center;
  margin: 10px auto 0;
  font-family: sans-serif;
`;

export const ImageWrapper = styled.div`
  width: 45%;
  margin: 20px auto;
  @media screen and (min-width: 1024px){
    width: 15%;
  }
`

export const Image = styled.img`
 	width: 100%;
	height: 100%;
  max-height: 140px;
`;

export const Description = styled.p`
  width: 90%;
  height: auto;
  font-size: 16px;
  margin: 25px auto;
  text-align: center;
  @media screen and (min-width: 1024px){
    width: 75%;
    font-size: 18px;
  }
`;

export const CloseBtn = styled.button`
  top: 0;
  right: 0;
  width: 40px;
  color: #000;
  height: 40px;
  border: none;
  font-size: 18px;
  position: absolute;
  background-color: transparent
` 