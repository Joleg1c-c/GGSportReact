import axios from 'axios';
import React, { useState } from 'react';

function AppLogin() {
    const baseURLlogin = "http://www.ggsport.somee.com/Authentication/Login";
    var token = "";
    
    const [post, setPost] = useState({
    email: '',
    password: ''  
    })
    
    function popitRegister(event) {
        event.preventDefault()  
        axios.put(baseURLlogin, post)
        .then((res) => {
            console.log(res)
            token = res.data 
            console.log(token)
            makeToken()
            makeNoErrorEntrance()
        })
        .catch(function(err) {
            if (err.response){
                makeErrorEntrance()
                console.log(err.message);
                console.log(err.name);
                
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
        document.getElementById("token").innerHTML = "" + token;
    }
    
    function makeErrorEntrance(){
        document.getElementById("errorcum").innerHTML = "Неверный логин или пароль!";
    }
    
    function makeNoErrorEntrance(){
        document.getElementById("errorcum").innerHTML = "";
    }
    
    function getClient(event) {
        const jsonToken = {
            headers: {
                "accept": "*/*",
                "Authorization": "Bearer " + token
            }
        }
        console.log(jsonToken);
        event.preventDefault()  
        axios.get("http://www.ggsport.somee.com/Client/Get", jsonToken)
        .then((res) => {
            console.log(res)
        })
        .catch(function(err) {console.log(err);} )
    }
    return (
        <main>
            <div className="Login">
                <h1>Попытка Войти на сервер</h1>

                <form onSubmit={popitRegister}>
                    <p>Логин</p>
                    <input name = "email" onChange={makePost}></input>

                    <p>Пароль</p>
                    <input name = "password" onChange={makePost}></input>
                    
                    
                    <p style={{color:"red"}} id ="errorcum"></p>
                    <br/>
                    <button id ="login">Войти</button>

                    <br/><br/><br/>
                    <p id = "token">токена нет!</p>
                </form>
                
                <form onSubmit={getClient}>
                    <br/><br/><br/>
                    <button id ="info" >Клиентская информация</button>
                </form>
            </div>
        </main>
)
}

export default AppLogin
