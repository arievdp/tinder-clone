import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css"

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Wilson",
            url: "https://www.prestigeanimalhospital.com/sites/default/files/styles/large/adaptive-image/public/golden-retriever-dog-breed-info.jpg?itok=scGfz-nI"
        },
        {
            name: "Doggo",
            url: "https://cdn.wimmel-napkins.com/F/1/AM/g13312895.jpg"
        }
    ]);
    // How to push to an array in React:
    // setPeople([...people, 'sonny', 'qazi'])

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    >
                        <div 
                        style={{ backgroundImage: `url(${person.url})`}}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards