import { Form, Button, Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

export default function Recipe() {
    //storage useState
    const [searchValue, setSearchValue] = useState();
    const [datas, setData] = useState([])
    //api link
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    //get api info function
    const fetchRecipe = async () => {
        try {
            const res = await fetch(url)
            const recipes = await res.json()
            setData(recipes.meals)
            console.log(recipes.meals)
        } catch (error) {
            alert(error)
        }
    }
    //change input value function
    const handleSearchValue = (e) =>{ 
        setSearchValue(prevSearchValue => prevSearchValue = e.target.value)
    }
    //search api button function
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
                            <div className='recipe-card' key={data.idMeal} >
                                <img src={data.strMealThumb} alt="food-pic"/>
                                <p>{data.strMeal}</p>
                                <div className='recipe-card-btn-container'>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Ingredients</Accordion.Header>
                                            <Accordion.Body>
                                                <div className='recipe-list-container'>
                                                    <a>{data.strIngredient1} {data.strMeasure1}</a>
                                                    <a>{data.strIngredient2} {data.strMeasure2}</a>
                                                    <a>{data.strIngredient3} {data.strMeasure3}</a>
                                                    <a>{data.strIngredient4} {data.strMeasure4}</a>
                                                    <a>{data.strIngredient5} {data.strMeasure5}</a>
                                                    <a>{data.strIngredient6} {data.strMeasure6}</a>
                                                    <a>{data.strIngredient7} {data.strMeasure7}</a>
                                                    <a>{data.strIngredient8} {data.strMeasure8}</a>
                                                    <a>{data.strIngredient9} {data.strMeasure9}</a>
                                                    <a>{data.strIngredient10} {data.strMeasure10}</a>
                                                    <a>{data.strIngredient11} {data.strMeasure11}</a>
                                                    <a>{data.strIngredient12} {data.strMeasure12}</a>
                                                    <a>{data.strIngredient13} {data.strMeasure13}</a>
                                                    <a>{data.strIngredient14} {data.strMeasure14}</a>
                                                    <a>{data.strIngredient15} {data.strMeasure15}</a>
                                                    <a>{data.strIngredient16} {data.strMeasure16}</a>
                                                    <a>{data.strIngredient17} {data.strMeasure17}</a>
                                                    <a>{data.strIngredient18} {data.strMeasure18}</a>
                                                    <a>{data.strIngredient19} {data.strMeasure19}</a>
                                                    <a>{data.strIngredient20} {data.strMeasure20}</a>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Instruction</Accordion.Header>
                                            <Accordion.Body>
                                                <div className='measurement-container'>
                                                    <a>{data.strInstructions}</a>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Information</Accordion.Header>
                                            <Accordion.Body>
                                                <div className='info-container'>
                                                    <a>Category: {data.strCategory}</a>
                                                    <a>Country: {data.strArea}</a>
                                                    <a href={data.strSource} target="_blank"> Original Source</a>
                                                    <a href={data.strYoutube}>Youtube Tutorial</a>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}