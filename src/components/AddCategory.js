import React, { useState } from 'react'
import PropTypes from 'prop-types';


const AddCategory = ( { setCategories } ) => {

    //la ventaja de usar un hook es que al cambiar el valor este se renderiza en el HTML
    const [inputValue, setInputValue] = useState(''); //si no mando '' recibe un undefined y genera un error

    //recibe el evento de onChage
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        //e.target.value tiene todo el texto del input, no solo el nuevo valor que ingresamos
        //en definitiva estamos setiando el inputValue con el todo el texto del input cuando se genera el evento
        setInputValue( e.target.value ) //recibe el nuevo valor que le queremos dar a inputValue
    };

    const handleSubmit = (e) => {
        //evita el comportamiento por defecto del form y no recarga la pagina
        e.preventDefault();
        
        if(inputValue.trim().length > 2){
            //el callback del setCategories tiene el estado anterior de las categorias y lo recibe como parametro
            setCategories( categoriesOld => [ inputValue, ...categoriesOld ] ); //dejamos en la primera posicion la nueva categoria
            //limpiamos o vaciamos el input
            setInputValue('');
        }
    };

    return (
        //no es necesario en fragment ya que el from contiene a todos los elementos
        <form onSubmit={ handleSubmit }>
            <input 
                type = 'text'
                value = { inputValue }
                //onChange= { e => handleInputChange(e) }
                onChange= { handleInputChange }//el evento pasa el obj evento como parametro a la funcion handleInputChange implicitamente
            />
        </form>
    );

};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};


export default AddCategory;