import React from 'react';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat 
            name="Mark"
            message="Yo, whats up?"
            timestamp="40 seconds ago"
            profilePic="https://i.pinimg.com/564x/95/77/3a/95773a62497aadf957fb800b99dae301.jpg"/>
            <Chat 
            name="Mark"
            message="Yo, whats up?"
            timestamp="40 seconds ago"
            profilePic="https://i.pinimg.com/564x/95/77/3a/95773a62497aadf957fb800b99dae301.jpg"/>
            <Chat 
            name="Mark"
            message="Yo, whats up?"
            timestamp="40 seconds ago"
            profilePic="https://i.pinimg.com/564x/95/77/3a/95773a62497aadf957fb800b99dae301.jpg"/>
            <Chat 
            name="Mark"
            message="Yo, whats up?"
            timestamp="40 seconds ago"
            profilePic="https://i.pinimg.com/564x/95/77/3a/95773a62497aadf957fb800b99dae301.jpg"/>
        </div>
    )
}

export default Chats;