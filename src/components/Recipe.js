import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import RecipeCard from './RecipeCard';
import axios from 'axios'

export default function Recipe() {

    const [searchValue, setSearchValue] = useState();
    const [loading, setLoading] = useState(false)
    const [showResult, setShowResult] = useState("");
    const [datas, setData] = useState([])

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`

    const fetchRecipe = async () => {
        setLoading(true)
        try {
            const res = await fetch(url)
            const recipes = await res.json()
            setData(recipes.meals)
            console.log(recipes.meals)
        } catch (error) {
            alert("no result")
        }
    }


    // useEffect(()=>{
    //     fetchRecipe()
    // },[searchValue])



    const handleSearchValue = (e) =>{ 
        setSearchValue(prevSearchValue => prevSearchValue = e.target.value)
    }

    const searchBtn = () =>{
        fetchRecipe()
        console.log(datas)

    }

    return (
        <div className="recipe-container">
            <div className='description-container'>
                <h1>Find Your Meal Ingredients</h1>
                <p>We got ingredients for everything</p>
            </div>

            <div className="search-container">
                <Form.Control className='search-box' type="text" placeholder="Normal text"  onChange={handleSearchValue} />
                <Button variant="primary" size="md" onClick={searchBtn}>Search</Button>
            </div>

            <div className='result-container'>
                <div className='result-text-container'>
                    <h2>Your Search Results:</h2>
                </div>
                <div className='result-info-container'>
                    {datas.map(data=>{
                        return (
                            <div className='recipe-card' key={data.idMeal}>
                                <img src={data.strMealThumb} alt="food-pic"/>
                                <p>{data.strMeal}</p>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


    // const getRecipeApi = (food) => {
    //     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
    //     .then(response=>{
    //         return response.json()
    //     })
    //     .then(response=>{
    //     })
    //     .catch(()=>{
    //         alert('no food found')
    //     })
    // }

    // if(loading){
    //     return(
    //         <div>
    //             loading
    //         </div>
    //     )
    // }