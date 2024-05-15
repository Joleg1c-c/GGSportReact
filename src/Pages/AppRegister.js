import axios from 'axios';
import React, { useState } from 'react';
import "./css/register.css"

function AppRegister() {
    const baseURLlogin = "http://www.ggsport.somee.com/Authentication/Register";

    const [post, setPost] = useState({
        email: '',
        password: '',
        lastName: "",
        firstName: "",
        patronymic: ""
    })

    const [passwordConfirm, setpasswordConfirm] = useState('')

    function popitRegister(event) {
        event.preventDefault()
        console.log(post);
        if (checkPassword()){
            axios.post(baseURLlogin, post)
                .then((res) => {
                    console.log(res)
                    makeNoErrorEntrance()
                    hideBlockRegis()
                })
                .catch(function (err) {
                    if (err.response) {
                        makeErrorEntrance()
                        console.log(err.message);
                        console.log(err.name);

                    } else if (err.request) {
                        console.log(err.request);

                    } else {
                        console.log("Error:", err.message);
                    }
                    console.log(err);
                })
        }
        else{
            console.log("ААА, неверно продублировали пароль!");
        }
    }

    const makePost = (event) => {
        setPost({ ...post, [`${event.target.name}`]: event.target.value })
    }   
    
    const setPassComf = (event) => {
        setpasswordConfirm(event.target.value)
    }

    const checkPassword = () => {
        return (post.password === passwordConfirm);

    }

    function makeErrorEntrance() {
        document.getElementById("errorcum").innerHTML = "Проблемы регистрации!";
    }

    function makeNoErrorEntrance() {
        document.getElementById("errorcum").innerHTML = "Вы успешно зарегестрировались!";
    }

    function hideBlockRegis(){
        document.getElementById("RegisConteiner").style.visibility = 'hidden'
    }

    return (
        <main>
            <div className="Regis">
                <h1>Регистрация</h1>

                <form id='RegisConteiner' >
                    <div className='registerClientInfo'>
                        <div className='registerClientInfoBlock'>
                            <p>Имя</p>
                            <input name="firstName" onChange={makePost} type='email' required></input>
                        </div>
                        
                        <div className='registerClientInfoBlock'>
                            <p>Фамилия</p>
                            <input name="lastName" onChange={makePost} type='email' required></input>
                        </div>
                        
                        <div className='registerClientInfoBlock'>
                            <p>Отчество</p>
                            <input name="patronymic" onChange={makePost} type='email' required></input>
                        </div>
                    </div>

                    <p>Логин</p>
                    <input name="email" onChange={makePost} type='email' required></input>

                    <p>Пароль</p>
                    <input name="password" onChange={makePost}  type='password' required></input>

                    <p>Подтвердите пароль</p>
                    <input name="passwordConfirm" onChange={setPassComf} type='password' required></input>


                    <p style={{ color: "red" }} id="errorcum"></p>
                    <br />
                    <button type="button" id="login" onClick={popitRegister}>Зарегистрироваться</button>

                </form>


                {/* <form onSubmit={getClient}>

                    <button id="info" >Клиентская информация</button>
                </form> */}
            </div>
        </main>
    )
}

export default AppRegister
