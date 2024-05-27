import React, {useState, useEffect} from 'react';
import './css/cards.css'
import axios from 'axios';

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
            <main>
                {/* <button onClick={()=>handleadd()}>Add</button> */}
                <br/><br/>
                
                <div className="cards">
                    {
                        cards === null ?
                        <div>

                        </div>
                        :
                        cards.map((data,i)=>{ 
                            return (
                                <div className='card'> 
                                    <form>
                                        <p>Наименование - {cards[i].name}</p>
                                        <p>Цена - {cards[i].price}</p>
                                        <p>Срок - {cards[i].maxMonths}</p>
                                        <button className='buttonCard'>Приобрести</button>
                                    </form>
                                </div>
                        )})
                    }
                </div> 
            </main>
        )
          
}

export default AppCards;