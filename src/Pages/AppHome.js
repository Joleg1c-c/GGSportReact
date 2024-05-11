import axios from 'axios';
import React from 'react';

function AppHome() {
    const baseURLCards = "http://www.ggsport.somee.com/ClubCard";

    var cards = [{name:''}];
    
    function getCards() {
        axios.get(baseURLCards)
        .then((res) => {
            console.log(res)
            cards.length=0;
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
            {<div>
                <h3>{cards[0].name}</h3>
            </div>}
        </div>
    </main>
)
}

export default AppHome