import React,{ useEffect,useState} from 'react'; 
import Recipe from "./Recipe" 
import './App.css';

const App= () =>
{
  const App_Id = "43f9339f"; 
  const App_KEY = "28344f675000fc841457ad177eddafc8";

    const [recipes,setRecipies] = useState([]);   
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('chicken');

    useEffect( () =>{
      getRecipes();
    },[query]);

    

    const getRecipes = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_Id}&app_key=${App_KEY}` );
      const data = await response.json();
      setRecipies(data.hits);
      console.log(data.hits);

    };

    const updateSearch = e => {
      setSearch(e.target.value);

    };
    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      
    };

  return (
    <div className="App">
      <form onSubmit ={getSearch} className="search-form">
        <input
         className="search-bar" 
        type ="text"
        value={search}
        onChange={updateSearch}/>
        <button className="search-button"type = "submit">Grab It</button>
      </form> 

      <div className = "recipes">
      {recipes.map(recipe =>(
      <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}  
        calories={recipe.recipe.calories}
        image = {recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );
}
 
export default App; 
 