import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

export default function Recipe() {

    const [searchValue, setSearchValue] = useState();
    const [showResult, setShowResult] = useState();

    const getRecipeApi = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            
        })
    }

    const handleSearchValue = (e) =>{ 
        setSearchValue(prevSearchValue => prevSearchValue = e.target.value)
    }

    return (
        <div className="recipe-container">
            <div className='description-container'>
                <h1>Find Your Meal Ingredients</h1>
                <p>WE got ingredients for everything</p>
            </div>

            <div className="search-container">
                <Form.Control type="text" placeholder="Normal text" onChange={handleSearchValue} />
                <Button variant="primary" size="md" onClick={getRecipeApi}>Search</Button>
            </div>

            <div className='result-container'>
                <div className='result-text-container'>
                    <h2>Your Search Results:</h2>
                </div>
                <div className='result-info-container'>
                    <p>blah</p>
                </div>
            </div>
        </div>
    )
}