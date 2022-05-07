import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react'

export default function Recipe() {

    const [searchValue, setSearchValue] = useState();
    const [showResult, setShowResult] = useState();
    const [datas, setData] = useState([])

    const getRecipeApi = (food) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
        .then(response=>{
            return response.json()
        })
        .then(response=>{
            showInfo(response)
        })
        .catch(()=>{
            alert('no food found')
        })
    }

    const showInfo =(res)=>{

    }

    const searchBtn = () => {
        getRecipeApi(searchValue)
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
                <Button variant="primary" size="md" onClick={searchBtn}>Search</Button>
            </div>

            <div className='result-container'>
                <div className='result-text-container'>
                    <h2>Your Search Results:</h2>
                </div>
                <div className='result-info-container'>
                    <p>{showResult}</p>
                </div>
            </div>
        </div>
    )
}