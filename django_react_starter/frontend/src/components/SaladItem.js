import React from 'react';

const SaladItem = ({item}) => {
    return (
        <div>
            <h1>Рецепт {item.title}</h1>
            <p>{item.description}</p>
        </div>
    );
};

export default SaladItem;