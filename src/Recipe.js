import React from 'react'; 

const Recepie = ({title,calories,image,ingredients}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>
                        {ingredient.text}
                    </li>
                    ))}
            </ul>
           <h4>Calories =  {calories}</h4>
            <img src={image} alt=""/>

        </div>
    );
}
 
export default Recepie;