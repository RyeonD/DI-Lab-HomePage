import React, { useState, useContext, createContext, useEffect } from 'react'
import axios from 'axios'
const ContextState = createContext();
const ContextDispatch = createContext();

export const Provider = ({children}) => {
    const [login, setLogin] = useState(false);
    const [userAuth, setUserAuth] = useState(0);
    const [forumList, setForumList] = useState([]);
    const stateObj = {
        login,
        userAuth,
        forumList
    }
    const setObj = {
        setLogin, setUserAuth
    }
    const initialize = () => {
        axios.get('/api/user/getJWT')
        .then(res => {
            if(res.data){
                setLogin(true)
                console.log(res.data)
                setUserAuth(res.data)
            }
        })
        axios.get('/api/posts/forumInfo')
        .then(res => {
            setForumList(res.data)
        })
    }
    useEffect(()=>{
        initialize()
    },[])
    return (
        <ContextState.Provider value = {stateObj}>
            <ContextDispatch.Provider value = {setObj}>
                {children}
            </ContextDispatch.Provider>
        </ContextState.Provider>
    )
}
export const useContextState = () => {
    return useContext(ContextState)
}
export const useContextDispatch = () => {
    return useContext(ContextDispatch)
}