import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="home-container">
            <div className="welcome-container">
                <p>Find the ingredients to your meals</p>
            </div>
            <div className="recipe-btn-container">
                <Link to='/recipe'>
                    <Button variant="primary" size="lg">Search Recipe</Button>
                </Link>
            </div>
        </div>
    )
}