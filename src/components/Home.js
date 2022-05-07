import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="home-container">
            <div className="welcome-container">
                <div className='welcome-1-container'>
                    <div>
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2Fcreamy-strawberry-crepes.jpg&w=316&h=211&c=sc&poi=face&q=60"/>
                        <h3>How To Make Crepe</h3>
                        <p>Click here</p>
                    </div>
                    <div>
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2017%2F05%2F1237453-Mixed-Berry-Trifle-Photo-by-Kims-Cooking-Now-650x465-1.jpg&w=316&h=211&c=sc&poi=face&q=60"/>
                        <h3>12 Easy Mother's Day Treats That'll Make Her So Proud of You</h3>
                    </div>
                </div>

                <div className='welcome-2-container'>
                
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F03%2F4513899-2000.jpg&w=640&h=428&c=sc&poi=face&q=60"/>
                        <h3>Our Complete Collection of Mother's Day Brunch Recipes</h3>
                        <p>Tastey crepe, French toast, and egg recipes that Mom will flip for, complete with how-to videos, ratings, reviews, and cooking tips.</p>
                
                </div>
            </div>
            <div className="recipe-btn-container">
                <Link to='/recipe'>
                    <Button variant="primary" size="lg">Search Recipe</Button>
                </Link>
            </div>
        </div>
    )
}