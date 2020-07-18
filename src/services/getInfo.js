import md5 from 'js-md5'

export default async function fetchData() {
    
    const myInit = {
        mode: 'cors',
        cache: 'default',
        method: 'GET',
        headers: new Headers()
    }
    
    const _private = 'd72fb2ccafd66f95c44d9d317a11a2d806295302';
    const _public = 'a29ce800f0f546900270546d21f85bd7';

    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(`${timestamp}${_private}${_public}`);
    
    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&limit=30&apikey=${_public}&hash=${hash.hex()}`, myInit);
    const data = await response.json();
    const {data: {results}} = data;
    return results;
}