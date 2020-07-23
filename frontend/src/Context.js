import React, { useState, useContext, createContext, useEffect } from 'react'
import axios from 'axios'
const ContextState = createContext();
const ContextDispatch = createContext();

export const Provider = ({children}) => {
    const [login, setLogin] = useState(false);
    const initialize = () => {
        axios.get('/api/user/getJWT')
        .then(res => {
            console.log(res)
            setLogin(true)
        })
    }
    useEffect(()=>{
        initialize()
    },[])
    return (
        <ContextState.Provider value = {login}>
            <ContextDispatch.Provider value = {setLogin}>
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