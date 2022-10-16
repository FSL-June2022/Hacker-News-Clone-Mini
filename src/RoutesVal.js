import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Stories from './Components/Stories';
import Story from "./Components/Story";
import Head from './Head';

const RoutesVal = () => {
    return (
        <BrowserRouter>
            <Head />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/topstories' element={<Stories />} />
                <Route path='/beststories' element={<Stories />} />
                <Route path='/lateststories' element={<Stories />} />
                <Route path='/story' element={<Story />} />
            </Routes>

        </BrowserRouter>

    )
}


export default RoutesVal;




