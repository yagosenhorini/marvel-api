import React from 'react'

import * as S from './style'

import LazyLoadImage from '../Image'
import Marvel from "../../Images/marvel-logo.png"

function Header(){
  return(
      <S.Header>
          <S.HeaderList>
            <LazyLoadImage src={Marvel} alt="Logo" />
          </S.HeaderList>
      </S.Header>  
  );
};

export default Header;