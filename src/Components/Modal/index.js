import React, {useState, useEffect, useRef} from 'react';
import * as S from './style';

export default function Modal({props}, isActive){
 
const [useHero, setHero] = useState(null);
const [useActive, setActive] = useState(null);


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
      {useHero &&  useActive &&(
        <S.Modal ref={modalRef} isActive={useActive} className={isActive ? 'is--active' : ''}>
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