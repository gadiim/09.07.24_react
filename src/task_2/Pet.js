import React from 'react';

function Pet(props) {
    return (
        <>
            <h3>{props.name}</h3>
            <img src={props.photo} className="photo" alt="photo" />
            <div><strong>species:</strong> {props.species}</div>
            <div><strong>breed:</strong> {props.breed}</div>
            <div><strong>age:</strong> {props.age}</div>
            <div><strong>owner:</strong> {props.owner}</div>
        </>
    );
}

export default Pet;
