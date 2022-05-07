import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';


export default function Trending() {
    return (
        <div className='trending-container'>
            
            <div className="recipe-btn-container">
                <p>Search by ingredients</p>
                <Link to='/recipe'>
                    <Button variant="primary" size="lg">Search Recipe</Button>
                </Link>
            </div>
         
            <div className='trends'>
                <div>
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F09%2F01%2F501396_original-2000.jpg&w=100&h=100&c=sc&poi=face&q=60"/> 
                    <p>Slow Cooker</p>
                </div>
                <div>
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2019%2F09%2F6960703.jpg&w=100&h=100&c=sc&poi=%5B318%2C232%5D&q=60"/> 
                    <p>Air Fryer Recipes</p>
                </div>
                <div>
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2015%2F05%2F100492_Kathys-Award-Winning-Barbeque-Sauce_Photo-by-GodivaGirl.jpg&w=100&h=100&c=sc&poi=%5B318%2C223%5D&q=60"/> 
                    <p>BBQ & Grilling</p>
                </div><div>
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F05%2F07%2F5079227.jpg&w=100&h=100&c=sc&poi=face&q=60"/> 
                    <p>Brunch Recipes</p>
                </div><div>
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F09%2F01%2F197357_original-2000.jpg&w=100&h=100&c=sc&poi=face&q=60"/> 
                    <p>Chicken Recipes</p>
                </div>
                <div>
                    <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F-0001%2F11%2F30%2F879969.jpg&w=100&h=100&c=sc&poi=face&q=60"/> 
                    <p>Dessert Recipes</p>
                </div>
            </div>
            


        
        </div>
    )
}
