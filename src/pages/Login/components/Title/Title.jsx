import React from 'react';
import './Title.css'; // agregar mis estilos!!!

const Title = ({ nombre }) => {
    return (
        <div className='title-container'>
            <label className='title-label'> { nombre } </label>
        </div>
    )
};

export default Title;