import React, {useState} from 'react';
import './css/cards.css'

function AppCards() {
    const [cards, setCards] = useState(getCards()) 
    function getCards() {
        ///axios.get(baseURLCards)
        // .then((res) => {
        //     console.log(res)
        //     cards.length=0;
        //     for (var i = 0; i < 2; i++) {
        //         cards.push(res.data[i])
        //     }
        //     console.log(cards)
        // })
        return ([{name:'as'}, {name:'dsa'}])
        
    }

    const handleadd=()=>{
        const abc = [...cards, {name:"Da"}]
        setCards(abc)
        console.log(cards)
    }

        return (
            <main>
                <button onClick={()=>handleadd()}>Add</button>
                
                <div className="cards">
                    {/* {getCards()} */}

                    {cards.map((data,i)=>{ 
                        return (
                            <div className='card'> 
                                <p>{cards[i].name}</p>
                            </div>
                    )})}
                </div> 
            </main>
        )
          
}

export default AppCards;