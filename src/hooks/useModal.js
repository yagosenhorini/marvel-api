import {useState, useEffect} from 'react';

export default function useModal(initial) {

	const [useActive, setActive] = useState(initial);
  
  useEffect(() => {
    if(useActive){
      setActive(false);
    }
    return setActive(true);
  }, [useActive])
	return {useActive};
}