import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

function AppConfirm() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const location = useLocation();
    const state = location.state
    // const data = location.state;
    
    useEffect(() => {
        console.log(location)
        // console.log(data)
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
                <h1> ОФОРМЛЕНИЕ КАРТЫ </h1>
                <p>Вы хотите приобрести карту {state.card.name}</p>
                {/* <img src={require('./img/strongman.jpeg')} alt='ss'/> */}
                <p>
                    Введите свои паспортные данные для приобретения покупки    
                </p>
                <p>стоимость - {state.card.price} ₽</p>

                <p>Внимание, с вашей карты снимется {state.card.price} ₽!</p>
                <Link to="/sps" state={{id:state.card.id}}>
                    {/* <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer"> */}
                            <button type="button" onClick={()=>window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ','_blank', 'rel=noopener noreferrer')}>Приобрести</button>
                    {/* </a> */}
                </Link>
            </form>
        </div>
    </main>
)
}

export default AppConfirm