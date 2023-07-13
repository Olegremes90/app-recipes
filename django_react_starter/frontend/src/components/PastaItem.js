import React from "react";

const PastaItem = ({item}) => {


    console.log(item)
    return (
       <div>


                    <h1>Рецепт {item.title}</h1>
           <p>{item.description}</p>



            </div>
    );
};








export default PastaItem;