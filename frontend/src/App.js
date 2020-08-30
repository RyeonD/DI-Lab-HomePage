import React from 'react'
import Navigation from './components/Navigation/Navigation'
import { BrowserRouter, Route } from 'react-router-dom'
import Forum from './page/Forum'
import Main from './page/Main'
import AddPost from './page/AddPost'
import Post from './page/Post'
import Member from './page/Member'
import Footer from './components/Footer'
import {Provider} from './Context.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    return (
        <BrowserRouter>
            <Provider>
                <div>
                    <ToastContainer/>
                    <Navigation/>
                    <Route exact path = "/" component={Main}/>
                    <Route exact path = "/introduce" component={Main}/>
                    <Route exact path = "/member" component={Member}/>
                    <Route exact path = "/forum/:category" component={Forum}/>
                    <Route exact path = "/forum/:category/addPost" component={AddPost}/>
                    <Route exact path = "/forum/:category/:post_id/post" component={Post}/>
                    <Footer/>
                </div>
            </Provider>
        </BrowserRouter>
    )
}
export default App