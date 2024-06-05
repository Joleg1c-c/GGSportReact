import axios from 'axios';
import React, { useState, CSSProperties } from 'react';
import "./css/register.css"
import { FadeLoader } from 'react-spinners';

const override: CSSProperties = {
    display: "center",
    margin: "0 auto",
    borderColor: "hsl(46.82, 100%, 50%, 1)",
};

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
    const [errorColor,setErrorColor]=useState(false)
    const [loading, setLoad] = useState(false)



    function popitRegister(event) {
        event.preventDefault()
        console.log(post);
        if (checkRegister()){
            setLoad(true)
            axios.post(baseURLlogin, post)
                .then((res) => {
                    console.log(res)
                    makeNoErrorEntrance()
                    // hideBlockRegis()
                })
                .catch(function (err) {
                    if (err.response) {
                        console.log(err.message);
                        console.log(err.name);
                        
                    } else if (err.request) {
                        console.log(err.request);
                        
                    } else {
                        console.log("Error:", err.message);
                    }
                    setLoad(false)
                    makeErrorEntrance("e")
                    console.log(err);
                })
        }
    }

    const makePost = (event) => {
        setPost({ ...post, [`${event.target.name}`]: event.target.value })
    }   
    
    const setPassComf = (event) => {
        setpasswordConfirm(event.target.value)
    }

    const checkRegister = () =>{
        return (checkPassword() & chekPola()) 
    }

    const chekPola = () =>{
        if (post.email.length !== 0 & post.firstName.length !== 0 & post.password.length !== 0){
            return true
        }
        else {
            makeErrorEntrance("pole");
            return false
        }
    }

    const checkPassword = () => {
        if (post.password === passwordConfirm){
            return true
        }
        else{
            makeErrorEntrance("password")
            return false
        }
    }

    function makeErrorEntrance(error) {
        if (error === "password"){
            document.getElementById("errorcum").innerHTML = "Подтверждение не совпадает с паролем!";
        }
        else if (error === "pole"){
            document.getElementById("errorcum").innerHTML = "Заполните обязательные поля!";
        }
        else{
            document.getElementById("errorcum").innerHTML = "Попробуйте ещё раз!";
        }
    }

    function makeNoErrorEntrance() {
        setLoad(false)
        setErrorColor(true)
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
                            <p>*Имя</p>
                            <input name="firstName" onChange={makePost} type='firstName' required></input>
                        </div>
                        
                        <div className='registerClientInfoBlock'>
                            <p>Фамилия</p>
                            <input name="lastName" onChange={makePost} type='lastName' required></input>
                        </div>
                        
                        <div className='registerClientInfoBlock'>
                            <p>Отчество</p>
                            <input name="patronymic" onChange={makePost} type='patronymic' required></input>
                        </div>
                    </div>

                    <p>*Логин</p>
                    <input name="email" onChange={makePost} type='email' required></input>

                    <p>*Пароль</p>
                    <input name="password" onChange={makePost}  type='password' required></input>

                    <p>*Подтвердите пароль</p>
                    <input name="passwordConfirm" onChange={setPassComf} type='password' required></input>

                    {loading ? 
                    <div>
                        <br/>
                        <FadeLoader
                            color={'hsl(46.82, 100%, 50%, 1)'}
                            loading={true}
                            cssOverride={override}
                            size={100}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                    <div>

                    </div>
                    }
                    <p style={{ color:errorColor?"green":"red" }} id="errorcum"></p>
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
