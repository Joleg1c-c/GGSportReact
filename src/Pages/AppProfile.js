import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { useEffect, CSSProperties, useState } from 'react';
import { FadeLoader } from 'react-spinners';


const override: CSSProperties = {
    display: "center",
    margin: "0 auto",
    borderColor: "hsl(46.82, 100%, 50%, 1)",
  };
  

const AppProfile = () => {
    const navigate = useNavigate();
    const URLCurrentUser = "http://www.ggsport.somee.com/Authentication/GetCurrentUser";

    const [info, setInfo] = useState({}) 
    
    useEffect(() => {
        if(!isLogin()){
          navigate("/login")
        }
      }, []); 
    
    useEffect(() => {
        getCurrentInformation();
      }, []);
    
    const cookies = new Cookies()
    
    const logout = () =>{
        cookies.remove("jwt_token")
    }

    const editInformation = () =>{
        navigate("/editclient")
    }

    const getCurrentInformation = () =>{
        const jsonToken = {
            headers: {
                "accept": "*/*",
                "Authorization": "Bearer " + cookies.get("jwt_token")
            }
        }
        // event.preventDefault()  
        axios.get(URLCurrentUser, jsonToken)
        .then((res) => {
            const abc = res.data
            setInfo(abc)
            console.log(info)
        })
        .catch(function(err) {console.log(err);} )
    }

    function getAllClients() {
        const jsonToken = {
            headers: {
                "accept": "*/*",
                "Authorization": "Bearer " + cookies.get("jwt_token")
            }
        }
        console.log(jsonToken);
        // event.preventDefault()  
        axios.get("http://www.ggsport.somee.com/Client", jsonToken)
        .then((res) => {
            console.log(res)
        })
        .catch(function(err) {console.log(err);} )
    }

    const isLogin = () => {
        const ansv = cookies.get("jwt_token")
        console.log(ansv !== undefined)
        return (ansv !== undefined)
    }

    return (
            <main>
                <div>
                    { info === undefined ?
                        <div>
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

                            <h1>{info.firstName} {info.lastName }</h1>
                            <br/>
                            {info.schedules !== undefined ?
                                <p>количество записанных занятий - {info.schedules.length}</p>
                                :
                                <p></p>
                            }
                            
                            <form type="button" onSubmit={editInformation}>
                                <button id ="editInformation">Редактировать свою информацию</button>
                            </form>
                            
                            <br/>

                            {/* Карта: */}
                                {info.actualClubCard === null || info.actualClubCard === undefined ?
                                    <p>У вас нет карты</p>    
                                :
                                    <div> 
                                        {console.log(info.actualClubCard)}
                                        <p>У вас есть карта - {info.actualClubCard.name}</p>
                                        {/* <p>До - {info.clubCard.name}</p> */}
                                    </div>
                                }

                            {/* Для Админа: */}
                            {cookies.get("role") === "admin" ? 
                                console.log(getAllClients())
                                :
                                <div>
                                        
                                </div>
                            }
                            <br/>
                            <form onSubmit={logout}>
                                <button id ="logout_Button" >Разлогиниться</button>
                            </form>
                        </div>
                    }
                </div>
            </main>
    )
}

export default AppProfile
