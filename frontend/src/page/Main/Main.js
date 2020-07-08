import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import {BrowserRouter} from 'react-router-dom'

const Main = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigation/>
            </div>
        </BrowserRouter>
    )
}
export default Main