import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";



const AppProfile = () => {
    const navigate = useNavigate();

    const cookies = new Cookies()

    const logout = () =>{
        cookies.remove("jwt_token")
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

    const checkLogin = () => {
        const ansv = cookies.get("jwt_token")
        console.log(ansv !== undefined)
        return (ansv !== undefined)
    }

    if (!checkLogin()) {
        navigate('/login')

    }

    return (
            <main>
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

                    {/* <form onSubmit={checkLogin}>
                        <button id ="info3" >проверить печеньку</button>
                    </form> */}
                </div>
            </main>
    )
}

export default AppProfile
