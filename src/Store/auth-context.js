import React,{useState} from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn : false,
    login: (token)=>{},
    logout:()=>{},
});
export const AuthContextProvider =(props)=>{
const[token,settoken]= useState(null);
const userIsLoggedIn = !!token;

const loginHandler = (token)=>{
    settoken(token);
};
const logoutHandler=()=>{
    settoken(null);
};
const contextValue = {
    token:token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
};
return (
    <AuthContext.Provider value = {contextValue}>
        {props.children}
    </AuthContext.Provider>
);
};
export default AuthContext;