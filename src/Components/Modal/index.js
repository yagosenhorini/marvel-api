import React, {useState, useEffect, useRef} from 'react';
import cx from 'classnames'
import * as S from './style';

export default function Modal({props}, isActive){
 
const [useHero, setHero] = useState(null);
const [useActive, setActive] = useState(false);

const modalRef = useRef();

  useEffect(() => {
    setHero(props);
    setActive(isActive); 
  }, [isActive, props]);

  function removeModal(){
      setActive(false);
  }
  
  return(
    <>
      {useHero && useActive && (
        <S.Modal ref={modalRef} className={cx(isActive ? 'is--active' : '')}>
          <S.CloseBtn onClick={() => removeModal()}>X</S.CloseBtn>
          <S.Name>{useHero.name}</S.Name>
          <S.ImageWrapper>
            <S.Image src={`${useHero.thumbnail.path}.${useHero.thumbnail.extension}`}></S.Image>
          </S.ImageWrapper>
          <S.Description>{useHero.description ? useHero.description : 'N/A' }</S.Description>
        </S.Modal>
      )}
    </>
  );
};