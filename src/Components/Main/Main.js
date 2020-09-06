import React, { useState, useEffect } from 'react'

import useMarvelApi from '../../hooks/useResponse';

import * as S from '../Main/style';
import Modal from '../Modal';

import LazyLoadImage from '../Image/index';

export default function Main() {
		
	const {useSwapi, isLoading, isError} = useMarvelApi();
  const [useElement, setElement] = useState(null);
  const [useActive, setActive] = useState(false);

  function handleFavorite(item) {
    setElement(item);
    setActive(true);
  }

  useEffect(()=>{
    setElement(false)
	}, [])
	
	return (
		<>
			{isLoading && <div>Carregando...</div>}
			{isError && <div>Erro</div>}
			{!isError && !isLoading && useSwapi && (
      <>
				<S.HeroList>
					{useSwapi.map((item, index) => {
						let img = `${item.thumbnail.path}.${item.thumbnail.extension}`;
						return (
							<>
								<S.HeroListItem key={index}>
									<S.HeroName>{item.name}</S.HeroName>
										<LazyLoadImage src={img} alt={item.name}/>
									<S.HeroButton onClick={() => handleFavorite(item)}>Informações</S.HeroButton>
								</S.HeroListItem>
							</>
						)
					})}
				</S.HeroList>
        <Modal props={useElement} isActive={useActive}/>
        </>
			)}
		</>
	)
}