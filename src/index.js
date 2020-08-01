import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';
import './index.css';




//referencia al div del index con el id root
const divRoot = document.getElementById('root');

//renderizamos
ReactDOM.render( <GifExpertApp />, divRoot );


