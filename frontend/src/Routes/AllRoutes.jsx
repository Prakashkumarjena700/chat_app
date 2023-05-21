import React from 'react'
import Home from '../Pages/Home'

import { Routes, Route } from 'react-router-dom'
import ChatsPage from '../Pages/ChatsPage'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' Component={Home} ></Route>
            <Route path='/chats' Component={ChatsPage} ></Route>
        </Routes>
    )
}
