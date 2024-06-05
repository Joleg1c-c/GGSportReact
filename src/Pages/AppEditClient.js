import { useNavigate } from "react-router-dom";
import './css/editClient.css'

function AppEditClient() {
    const navigate = useNavigate();
    
    const editInformation = () =>{
        navigate("/profile")
    }

    const makePost = () =>{
        
    }

    return (
    <main>
        <div className="AppEditClient">
            <div className='editClientInfo'>
                <div className='editClientInfoBlock'>
                    <p className='editClientInfoBlock_p'>Имя</p>
                    <input name="firstName" onChange={makePost} type='name' required></input>
                </div>
                
                <div className='editClientInfoBlock'>
                    <p className='editClientInfoBlock_p'>Фамилия</p>
                    <input name="lastName" onChange={makePost} type='lastname' required></input>
                </div>
                
                <div className='editClientInfoBlock'>
                    <p className='editClientInfoBlock_p'>Отчество</p>
                    <input name="patronymic" onChange={makePost} type='patronymic' required></input>
                </div>
            </div>

            <div className='editClientInfo'>
                <div className='editClientInfoBlock'>
                    <p className='editClientInfoBlock_p'>Адресс</p>
                    <input name="firstName" onChange={makePost} type='name' required></input>
                </div>
                
                <div className='editClientInfoBlock1'>
                    <div className="editClientInfoBlock22">
                       <label for="editClientInfoBlock_p1">День рождения</label>
                    </div>
                    <input type="date" value="2018-07-22" />
                </div>
            </div>

            <div className='editClientInfo'>
                <div className='editClientInfoBlock'>
                    <p className='editClientInfoBlock_p'>НОМЕР-СЕРИЯ</p>
                    <input name="firstName" onChange={makePost} type='name' required></input>
                </div>
                
                <div className='editClientInfoBlock'>
                    <p className='editClientInfoBlock_p'>Кем выдан</p>
                    <input name="lastName" onChange={makePost} type='lastname' required></input>
                </div>
                
            </div>
            
            <br/>
            <form onSubmit={editInformation}>
                <button id ="editInformation">Назад</button>
            </form>
        </div>
    </main>
)
}

export default AppEditClient