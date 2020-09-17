import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'

import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Doggo',
            image: "https://i.pinimg.com/564x/95/77/3a/95773a62497aadf957fb800b99dae301.jpg",
            message: 'Whats up'
        },
        {
            name: 'Doggo',
            image: "https://i.pinimg.com/564x/95/77/3a/95773a62497aadf957fb800b99dae301.jpg",
            message: 'Whats up'
        },
        {
            message: 'Whats up, Doggo?'
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH DOGGO ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar className="chatScreen__image" 
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ): (
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )
            ))}
          
            <form className="chatScreen__input"> 
                <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                className="chatScreen_inputField"
                placeholder="Type a message" 
                type="text" />
                <button onClick={handleSend} type="submit" className="chatScreen_button" >SEND</button>
            </form>
   
        </div>
    )
}

export default ChatScreen
