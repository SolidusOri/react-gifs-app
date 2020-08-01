
const key = 'BT6NiLNV9HVbpieNGxUXWlBNyO9m42mK';

export const getGifs = async ( category ) => {

    //encodeURI( category ) escapa los espacios en la peticion
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=30&api_key=${key}`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });

    return gifs;
};