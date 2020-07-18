import {useState, useEffect} from 'react';
import getData from '../services/getInfo';

export default function useMarvelApi() {

	const [useSwapi, setSwapi] = useState(null);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	
	useEffect(() => {
		(async function getResponse() {
				setIsLoading(true);
				setIsError(false);
				try {
						const result = await getData();
						setSwapi(result);
				} catch (err) {
						setIsError(true);
						throw new Error('Error to get data', err);
				} finally {
						setIsLoading(false);
				}
		})();
	}, []);
			return {useSwapi, isLoading, isError};
}