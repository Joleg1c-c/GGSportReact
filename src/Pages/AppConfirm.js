import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

function AppConfirm() {
    const navigate = useNavigate();
    const cookies = new Cookies()
    
    useEffect(() => {
        if(!isLogin()){
          navigate("/login")
        }
      }, []); 

    const isLogin = () => {
        const ansv = cookies.get("jwt_token")
        console.log(ansv !== undefined)
        return (ansv !== undefined)
    }
    
    return (
    <main>
        <div className="Confirm">
            <form>
                <h1> оформление карты </h1>
                {/* <img src={require('./img/strongman.jpeg')} alt='ss'/> */}
                <p>
                    Введите свои паспортные данные для приобретения покупки    
                </p>
                <button>Подтвердить</button>
            </form>
        </div>
    </main>
)
}

export default AppConfirm