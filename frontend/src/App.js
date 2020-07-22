import React from 'react'
import Navigation from './components/Navigation/Navigation'
import { BrowserRouter, Route } from 'react-router-dom'
import Forum from './page/Forum/Forum'
import Main from './page/Main/Main'
import AddPost from './page/AddPost/AddPost'
import Post from './page/Post/Post'
import Member from './page/Member/Member'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <ToastContainer/>
                <Navigation/>
                <Route exact path = "/" component={Main}/>
                <Route exact path = "/introduce" component={Main}/>
                <Route exact path = "/forum/:category" component={Forum}/>
                <Route exact path = "/forum/:category/:post_id" component={Post}/>
                <Route path = "/forum/:category/addPost" component={AddPost}/>
                <Route exact path = "/member" component={Member}/>
                
                
            </div>
        </BrowserRouter>
    )
}
export default App