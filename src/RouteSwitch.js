import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBars from './components/NavBars'
import Home from './components/Home'
import Recipe from './components/Recipe'
import About from './components/About'

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <NavBars/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recipe" element={<Recipe/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}