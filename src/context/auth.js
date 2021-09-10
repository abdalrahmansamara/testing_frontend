import React, { useState } from 'react';
// import { Component } from 'react';
import { useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import toast from 'react-hot-toast';
const API = 'https://talkversity-apitesting.herokuapp.com/api/token/'; //process.env.API_SERVER;
// const SECRET = 'SECRET_KEY'; //process.env.JWT_SECRET;


export const SettingsContext = React.createContext();
function SettingsProvider(props) {
  const [loggedIn, setloggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});


  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
  },[]);
  const validateToken = async token => {
    try {

      const id = await jwt.decode(token).user_id;

      const userData = await axios.get(
        `https://talkversity-apitesting.herokuapp.com/accounts/${id}`

      );
      setLoginState(true, token, userData.data);
    } catch (error) {
      setLoginState(false, null, {});
      // console.log(`Token Validation Error ${error.message}`);
    }
  };
  const setLoginState = (loggedIn, token, user) => {
    // if(token == null){
    //   cookie.remove()
    // }
    cookie.save('auth', token);
    setToken(token);
    setUser(user);
    setloggedIn(loggedIn);
    setLoading(false);
  };
  const login = async (username, password) => {

    try {
      const data = {
        username,
        password,
      };

      const response = await axios.post(API, data);

      await validateToken(response.data.access);
      toast.success(`Login Success`)
      setTimeout(() => {

        window.location.href = `/`;
  
    }, 1000);

    } catch (error) {
      toast.error(`Either username or password are wrong`)
      // console.error('Signin Error', error.message);
    }
  };
  const logout = () => {
    setLoginState(false, null, {});
  };
  const signup = async userInfo => {
    try {
      const b = await axios.post('https://talkversity-apitesting.herokuapp.com/accounts/signup/', userInfo)
      toast.success(`Singup success`)
      window.location.href = `/signin`;
     
    } catch(error){

      toast.error(`Username already exists`)
      // console.error('Signup Error', error.message);

    }
    
  }
  const state = {
    loggedIn,
    setloggedIn,
    user,
    setUser,
    token,
    setToken,
    login,
    logout,
    signup,
    loading,
    setLoading
  };
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
export default SettingsProvider;
