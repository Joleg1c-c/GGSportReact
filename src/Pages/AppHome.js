import axios from 'axios';
import React from 'react';

function AppHome() {
    const baseURLCards = "http://www.ggsport.somee.com/ClubCard";

    var cards = [];
    
    function getCards() {
        axios.get(baseURLCards)
        .then((res) => {
            console.log(res)
            for (var i = 0; i < 2; i++) {
                cards.push(res.data[i])
            }
            console.log(cards)
        })
    }

    return (
    <main>
        {getCards()}
        <div>Home</div>
        <div>
            {cards.map((el) => (<div>
                <h3>{el.name}</h3>
            </div>))}
        </div>
    </main>
)
}

export default AppHome