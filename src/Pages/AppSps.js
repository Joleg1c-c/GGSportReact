import { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";


function AppSps() {
    const location = useLocation();

    const baseURL = "http://www.ggsport.somee.com/Contract/" + location.state.id
    
    useEffect(() => {
        clickButton();
    }, []); 

    const clickButton = () =>{
        axios.patch(baseURL)
            .then((res) => {
                console.log(res)
            
            }).catch(function(err) {
                console.log(err);
            } )
    }

    return (
    <main>
        <div className="Sps">
            <h1> БЛАГОДАРИМ ЗА ПОКУПКУ! </h1>
            <img src={require('./img/flex.gif')} alt='осуждаю'/>

        </div>
    </main>
)
}

export default AppSps