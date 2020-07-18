import React, { useState, useEffect } from 'react'

import useMarvelApi from '../../hooks/useResponse';

import * as S from '../Main/style';
import Modal from '../Modal';

export default function Main() {
		
	const {useSwapi, isLoading, isError} = useMarvelApi();
  const [useElement, setElement] = useState(null);
  const [useActive, setActive] = useState(null);

  
  function handleFavorite(item) {
    setElement(item);
    setActive(true);
  }

  useEffect(()=>{
    setElement(null)
	}, [])
	
	return (
		<>
			{isLoading && <div>Carregando...</div>}
			{isError && <div>Erro</div>}
			{!isError && !isLoading && useSwapi && (
				<S.HeroList>
					{useSwapi.map((item, index) => {
						let img = `${item.thumbnail.path}.${item.thumbnail.extension}`;
						return (
							<>
								<S.HeroListItem key={index}>
									<S.HeroName key={index}>{item.name}</S.HeroName>
									<S.HeroImageWrapper key={useSwapi.id}>
										<S.HeroImage src={img} />
									</S.HeroImageWrapper>
									<S.HeroButton onClick={() => handleFavorite(item)}>Informações</S.HeroButton>
								</S.HeroListItem>
							</>
						)
					})}
				</S.HeroList>
			)}
			{useElement && (
				<>
					<Modal props={useElement} isActive={useActive} />
				</>
			)}
		</>
	)
}