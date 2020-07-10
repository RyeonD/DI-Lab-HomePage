import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import {BrowserRouter, Route} from 'react-router-dom'
import Forum from '../Forum/Forum'
const Main = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigation/>
                <Route exact path = "/"/>
                <Route exact path = "/forum" component={Forum}/>
            </div>
        </BrowserRouter>
    )
}
export default Main