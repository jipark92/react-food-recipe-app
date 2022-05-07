import { Form, Button, Offcanvas, Overlay,Popover, Accordion} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState, useRef} from 'react'
import RecipeCard from './RecipeCard';

export default function Recipe() {
    //bootstrap useState
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (e) => {
        setShow(!show);
        setTarget(e.target);
    };
    //
    const [searchValue, setSearchValue] = useState();
    const [datas, setData] = useState([])
    //
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    //
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
    //
    const handleSearchValue = (e) =>{ 
        setSearchValue(prevSearchValue => prevSearchValue = e.target.value)
    }
    //
    const searchBtn = () =>{
        fetchRecipe()
        console.log(datas)
    }
    //

    //
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
                                                    <a>{data.strIngredient1}</a>
                                                    <a>{data.strIngredient2}</a>
                                                    <a>{data.strIngredient3}</a>
                                                    <a>{data.strIngredient4}</a>
                                                    <a>{data.strIngredient5}</a>
                                                    <a>{data.strIngredient6}</a>
                                                    <a>{data.strIngredient7}</a>
                                                    <a>{data.strIngredient8}</a>
                                                    <a>{data.strIngredient9}</a>
                                                    <a>{data.strIngredient10}</a>
                                                    <a>{data.strIngredient11}</a>
                                                    <a>{data.strIngredient12}</a>
                                                    <a>{data.strIngredient13}</a>
                                                    <a>{data.strIngredient4}</a>
                                                    <a>{data.strIngredient15}</a>
                                                    <a>{data.strIngredient16}</a>
                                                    <a>{data.strIngredient17}</a>
                                                    <a>{data.strIngredient18}</a>
                                                    <a>{data.strIngredient19}</a>
                                                    <a>{data.strIngredient20}</a>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Measurements</Accordion.Header>
                                            <Accordion.Body>
                                                {data.strMeasure1}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Video Tutorial</Accordion.Header>
                                            <Accordion.Body>
                                                <a href={data.strYoutube}>Youtube Tutorial</a>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Information</Accordion.Header>
                                            <Accordion.Body>
                                                <a href={data.strSource} target="_blank"> Original Source</a>
                                                Category: {data.strCategory}
                                                Country: {data.strArea}
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


//     <Offcanvas show={show} onHide={handleClose}>
//     <Offcanvas.Header closeButton>
//     <Offcanvas.Title>{data.strMeal}</Offcanvas.Title>
//     </Offcanvas.Header>
//     <Offcanvas.Body>
//         s
//     </Offcanvas.Body>
// </Offcanvas>

{/* <p>{data.strIngredient1}</p>
<p>{data.strIngredient2}</p>
<p>{data.strIngredient3}</p>
<p>{data.strIngredient4}</p>
<p>{data.strIngredient5}</p>
<p>{data.strIngredient6}</p>
<p>{data.strIngredient7}</p>
<p>{data.strIngredient8}</p>
<p>{data.strIngredient9}</p>
<p>{data.strIngredient10}</p>
<p>{data.strIngredient11}</p>
<p>{data.strIngredient12}</p>
<p>{data.strIngredient13}</p>
<p>{data.strIngredient14}</p>
<p>{data.strIngredient15}</p>
<p>{data.strIngredient16}</p>
<p>{data.strIngredient17}</p>
<p>{data.strIngredient18}</p>
<p>{data.strIngredient19}</p>
<p>{data.strIngredient20}</p> */}