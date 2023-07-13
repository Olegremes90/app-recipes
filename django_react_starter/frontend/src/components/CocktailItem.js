import React, {Component} from 'react';
import {useParams} from "react-router-dom";


const CocktailItem = ({item}) => {


    console.log(item)
    return (
       <div>


                    <h1>Рецепт {item.title}</h1>
           <p>{item.description}</p>



            </div>
    );
};








export default CocktailItem;