import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode";


function AppLogin() {
    const baseURLlogin = "http://www.ggsport.somee.com/Authentication/Login";
    var token = "";
    var error = "";
    const cookies = new Cookies();

    
    const [post, setPost] = useState({
        email: '',
        password: ''  
    })
    
    function popitRegister(event) {
        event.preventDefault()  
        axios.put(baseURLlogin, post)
        .then((res) => {
            console.log(res)
            token = res.data.token
            console.log(token)
            makeToken()
            makeNoErrorEntrance()
            login(token)
        })
        .catch(function(err) {
            if (err.response){
                console.log(err.message);
                console.log(err.response.data);
                error = err.response.data;
                makeErrorEntrance()
                
            } else if (err.request){
                console.log(err.request);
            
            } else{
                console.log("Error:", err.message);
            }
            console.log(err);
        } )
    }
    
    const makePost = (event) =>{
        setPost({...post, [`${event.target.name}`]: event.target.value})
    }
    
    function makeToken(){
        document.getElementById("token").innerHTML = "Вы вошли!";
    }
    
    function makeErrorEntrance(){
        document.getElementById("errorcum").innerHTML = error !== "" ? error: "Попробуйте ещё раз";
    }
    
    function makeNoErrorEntrance(){
        document.getElementById("errorcum").innerHTML = "";
    }

    const logout = () =>{
        cookies.remove("jwt_token")
    }

    const login = (jwt_token) => {
        const decoded = jwtDecode(jwt_token)
        console.log(decoded)
        
        cookies.set("jwt_token", jwt_token, {expires: new Date(decoded.exp * 1000)})
    }

    const checkLogin = () => {
        const ansv = cookies.get("jwt_token")
        console.log(ansv !== undefined)
        return (ansv !== undefined)
    }
    
    function getClient(event) {
        const jsonToken = {
            headers: {
                "accept": "*/*",
                "Authorization": "Bearer " + cookies.get("jwt_token")
            }
        }
        console.log(jsonToken);
        event.preventDefault()  
        axios.get("http://www.ggsport.somee.com/Client", jsonToken)
        .then((res) => {
            console.log(res)
        })
        .catch(function(err) {console.log(err);} )
    }
    return (
        <main>
            {checkLogin() ? (
                    <div>
                        <h1>Приветсвуем </h1>
                        <form onSubmit={getClient}>
                            <button id ="info" >Клиентская информация</button>
                        </form>
                        <br/>
                        
                        <form onSubmit={logout}>
                            <button id ="info2" >Разлогиниться</button>
                        </form>
                        <br/>

                        <form onSubmit={checkLogin}>
                            <button id ="info3" >проверить печеньку</button>
                        </form>
                    </div>
                ) : (
                    <div className="Login">
                        <h1>Вход</h1>

                        <form onSubmit={popitRegister}>
                            <p>Логин</p>
                            <input name = "email" onChange={makePost}></input>

                            <p>Пароль</p>
                            <input name = "password" onChange={makePost}></input>
                            
                            
                            <p style={{color:"red"}} id ="errorcum"></p>
                            <br/>
                            <button id ="login">Войти</button>

                            <br/><br/><br/>
                            <p id = "token">вы не вошли!</p>

                        </form>
                            <form onSubmit={checkLogin}>
                                <button id ="info3" >проверить печеньку</button>
                            </form>
                    </div>
            )}
        </main>
        )   
}

export default AppLogin
