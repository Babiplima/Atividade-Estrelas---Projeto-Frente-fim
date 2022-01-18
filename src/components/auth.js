import react from 'react'

import {Route, Redirect} from "react-router-dom";
import { Component } from 'react/cjs/react.production.min';

//
const isAuth = () => {
    if(localStorage.getItem('token')!== null){
        return true 
    }
    return false;
}

//redirecionar o usuário caso ele esteja autenticado ou não 

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render = {props =>
            isAuth() ? (
                <Component {...props} />
            ):(
                             
                <Redirect 
                to={{
                    pathname: '/',
                    state: {message:"Usuário não autorizado."}
                }}                
                      
        />
        )}
        />
    );
}

export default PrivateRoute;    


