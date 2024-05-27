import axios from 'axios';
import React, { useState, CSSProperties } from 'react';
import Cookies from 'universal-cookie';
import { jwtDecode } from "jwt-decode";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { FadeLoader } from 'react-spinners';

const override: CSSProperties = {
    display: "center",
    margin: "0 auto",
    borderColor: "hsl(46.82, 100%, 50%, 1)",
};
  

function AppLogin() {
    const navigate = useNavigate();

    useEffect(() => {
        if(isLogin()){
          navigate("/profile")
        }
      }, []);

    const baseURLlogin = "http://www.ggsport.somee.com/Authentication/Login";
    var token = "";
    var error = "";
    const cookies = new Cookies();

    const [loading, setLoad] = useState(false)
    const [post, setPost] = useState({
        email: '',
        password: ''  
    })
    
    function popitRegister(event) {
        setLoad(true)
        event.preventDefault()  
        axios.put(baseURLlogin, post)
        .then((res) => {
            console.log(res)
            token = res.data.token
            console.log(token)
            makeNoErrorEntrance()
            login(token)
            setLoad(false)
            window.location.reload();
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
            setLoad(false)
            console.log(err);
        } )
    }
    
    const makePost = (event) =>{
        setPost({...post, [`${event.target.name}`]: event.target.value})
    }
    
    function makeErrorEntrance(){
        document.getElementById("errorcum").innerHTML = error !== "" ? error: "Попробуйте ещё раз";
    }
    
    function makeNoErrorEntrance(){
        document.getElementById("errorcum").innerHTML = "";
    }

    const login = (jwt_token) => {
        const decoded = jwtDecode(jwt_token)
        console.log(decoded)
        
        cookies.set("jwt_token", jwt_token, {expires: new Date(decoded.exp * 1000)})
    }

    const isLogin = () => {
        const ansv = cookies.get("jwt_token")
        console.log(ansv !== undefined)
        return (ansv !== undefined)
    }

    return (
        <main>
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

                </form>
                    {/* <form onSubmit={isLogin}>
                        <button id ="info3" >проверить печеньку</button>
                    </form> */}
            </div>

        </main>
        )   
}

export default AppLogin
