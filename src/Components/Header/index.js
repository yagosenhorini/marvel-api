import React from 'react'

import * as S from './style'

import Marvel from "../../Images/marvel-logo.png"

function Header(){
  return(
      <S.Header>
          <S.HeaderList>
              <S.HeaderListItem>
                  <S.HeaderLogo src={Marvel} alt="Logo" title="logo marvel" />
              </S.HeaderListItem>
          </S.HeaderList>
      </S.Header>  
  );
};

export default Header;