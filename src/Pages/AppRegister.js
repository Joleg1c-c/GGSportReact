import axios from 'axios';
import React, { useState } from 'react';

function AppRegister() {
    const baseURLlogin = "http://www.ggsport.somee.com/Authentication/Register";

    const [post, setPost] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    })

    function popitRegister(event) {
        event.preventDefault()
        console.log(post);
        // axios.post(baseURLlogin, post)
        //     .then((res) => {
        //         console.log(res)
        //         makeNoErrorEntrance()
        //         hideBlockRegis()
        //     })
        //     .catch(function (err) {
        //         if (err.response) {
        //             makeErrorEntrance()
        //             console.log(err.message);
        //             console.log(err.name);

        //         } else if (err.request) {
        //             console.log(err.request);

        //         } else {
        //             console.log("Error:", err.message);
        //         }
        //         console.log(err);
        //     })
    }

    const makePost = (event) => {
        setPost({ ...post, [`${event.target.name}`]: event.target.value })
    }

    function makeErrorEntrance() {
        document.getElementById("errorcum").innerHTML = "Проблемы регистрации!";
    }

    function makeNoErrorEntrance() {
        document.getElementById("errorcum").innerHTML = "";
    }

    function hideBlockRegis(){
        document.getElementById("RegisConteiner").style.visibility = 'hidden'
    }

    // function getClient(event) {
    //     const jsonToken = {
    //         headers: {
    //             "accept": "*/*",
    //             "Authorization": "Bearer " + token
    //         }
    //     }
    //     console.log(jsonToken);
    //     event.preventDefault()
    //     axios.get("http://www.ggsport.somee.com/Client", jsonToken)
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch(function (err) { console.log(err); })
    // }
    return (
        <main>
            <div className="Regis">
                <h1>Регистрация</h1>

                <form onSubmit={popitRegister} id='RegisConteiner' style={{visibility: "visible"}}>
                    <p>Логин</p>
                    <input name="email" onChange={makePost} type='email' required></input>

                    <p>Пароль</p>
                    <input name="password" onChange={makePost}  type='password' required></input>

                    <p>Подтвердите пароль</p>
                    <input name="passwordConfirm" onChange={makePost} type='password' required></input>


                    <p style={{ color: "red" }} id="errorcum"></p>
                    <br />
                    <button id="login" onClick={hideBlockRegis}>Зарегистрироваться</button>

                </form>


                {/* <form onSubmit={getClient}>

                    <button id="info" >Клиентская информация</button>
                </form> */}
            </div>
        </main>
    )
}

export default AppRegister
