import React, {useState, useEffect, CSSProperties} from 'react';
import './css/cards.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const override: CSSProperties = {
    display: "center",
    margin: "0 auto",
    borderColor: "hsl(46.82, 100%, 50%, 1)",
  };
  

function AppCards() {
    const [cards, setCards] = useState([]) 

    useEffect(() => {
        getCards();
      }, []);

    const baseURLCards = 'http://www.ggsport.somee.com/ClubCard'

    function getCards() {
        axios.get(baseURLCards)
            .then((res) => {
                console.log(res)
                for (var i = 0; i < res.data.length; i++) {
                    const abc = [...cards, res.data[i]]
                    setCards(abc)
                    console.log(abc)
                }
            })
       
    }

    const handleadd=()=>{
        // const abc = [...cards, {name:"Da"}]
        // setCards(abc)
        console.log(cards)
    }

        return (
            <div className='home_page'>
                <div className='main_fotos'>
                    <img className='main_foto' src={require("./img/main_foto_fix.jpeg")} alt="что-то пошло не так"></img>
                </div>
                <div className='back_cards'>
                    <br/>
                    <h1>КЛУБНЫЕ КАРТЫ</h1>
                    <div className="cards">
                        {
                            cards.length === 0 ?
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
                            cards.map((data, i)=>{ 
                                return (
                                    <div className='card'> 
                                        <form>
                                            <div className="card__top">
                                                <a href="#" className="card__image">
                                                {/* <img 
                                                    src="./image/iphone-14-pro-max-gold.png"
                                                    alt="Apple IPhone 14 PRO Max Gold"
                                                /> */}
                                                </a>
                                            </div>
                                            <div className="card__bottom">
                                                <div className="card__names">
                                                    <div className="card__name">{cards[i].name}</div>
                                                </div>
                                                <div className="card__title">
                                                    Цена: {cards[i].price} 
                                                    <br/>
                                                    Срок: {cards[i].maxMonths} месяцев
                                                </div>
                                                <NavLink to="/comform"><button className="card__add">Приобрести</button></NavLink>
                                            </div>
                                        </form>
                                    </div>
                            )})
                        }
                    </div> 
                </div>
            </div>
        )
          
}

export default AppCards;