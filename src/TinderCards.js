import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from './firebase';
import "./TinderCards.css"

function TinderCards() {

    const [people, setPeople] = useState([]);
    // How to push to an array in React:
    // setPeople([...people, 'sonny', 'qazi'])

    // Piece of code which runs based on a condition:
    useEffect(() => {
        // this is where the code runs
        // this will run ONCE when the component loads, and NEVER again
        
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot =>
                setPeople(snapshot.docs.map(doc => doc.data()))
            );
            // onSnapshot - everytime database changes, update
        
        return () => {
            // this is the cleanup
            unsubscribe();
        };

        

    }, []);

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