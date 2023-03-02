import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from "../../ui";
import { MarvelPage, DCPage, SearchPage, HeroPage } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Navigate to="/marvel  "/>}/>
                    
                    <Route path="marvel" element={<MarvelPage/>}/>
                    <Route path="dc" element={<DCPage/>}/>
                    <Route path="search" element={<SearchPage/>}/>
                    <Route path="hero/:id" element={<HeroPage/>}/>
                </Routes>
            </div>
        </>
    )
}
