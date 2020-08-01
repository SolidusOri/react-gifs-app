import React from 'react';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


const GifGrid = ({ category }) => {


    const { data:images, loading } = useFetchGifs( category );

    /*
    const [images, setImages] = useState([]);
    //esto hace que la funcion getGifs se ejecute segun el array de dependencias
    //el segundo parametro es una lista de dependencias, se manda vacio para que el useEffect se dispare una sola vez
    //en este caso se volvera a ejecutar la funcioon getGifs cuando el valor de category cambie
    useEffect( () => {
        //getGifs( category ).then( img => setImages( img ));
        //se puede poner asi cuando el primer arg es mandado como primer argumento a la fucion que desea ejecutar
        getGifs( category ).then( setImages );
    }, [ category ]);
    */


    return (
        <>
            <h3>{ category }</h3>

            {/*operador ternario corto, solo if */}
            { loading && <p className= 'animate__animated animate__flash' >Cargando...</p> }

            <div className='card-grid'>
                {
                    /*
                    //desestructuramos el img que itera el map
                    images.map( ({ id, title }) => (
                        //sin {} es un return implicito
                        <li key={ id }>{ title }</li>
                    ))
                    */

                   images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img } // id, title, url
                        />
                    ))
                }
            </div>
        </>
    );
};


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};


export default GifGrid;
