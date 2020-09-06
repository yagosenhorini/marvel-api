import styled, {
  keyframes
} from 'styled-components';

export const ImageWrapper = styled.div `
  width: 75%;
  height: 120px;
  margin: 10px auto 0;
  position: relative;
  @media screen and (min-width: 1024px){
    width: 30%;
    margin: 0 auto;
  }
`

const LoadingAnimation = keyframes `
  0%{
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

export const Placeholder = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${LoadingAnimation} 1s infinite;
`;

export const LazyImage = styled.img `
  width: 100%;
	height: 100%;
  max-height: 120px;
`