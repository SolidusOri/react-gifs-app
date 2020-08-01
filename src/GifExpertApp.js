import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp =  () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    //const handleAdd = () => {
        //setCategories( [ ...categories, 'Hunter X Hunter' ] );
        //setCategories( [ 'Hunter X Hunter', ...categories ] ); //se agrega al principio de la lista
        
        //set puede tener un callback donde el primer arg. es el valor anterior y debe retornar el nuevo valor o estado
        //esto es util cuando no tenemos acceso a las categorias
        //setCategories( cats => [ ...cats, 'Oliver Aton' ] );
    //};


    return (
        <>
            <h2>{ 'GifExpertApp' }</h2>
            {/*enviamos la referencia a la funcion setCategories al hijo*/}
            <AddCategory 
                setCategories={ setCategories }
            />
            <hr />

            {/*<button onClick = { handleAdd } >Agregar</button>*/}

            <ol>
                {
                    //usamos () en el cuerpo para no usar return, como si fuera una func de fecha de una sola linea
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );
};


export default GifExpertApp;
