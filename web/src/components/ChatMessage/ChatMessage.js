import React from "react";
import './ChatMessage.css';
import Avatar from "../../assets/avatar";

//message = user ( user ou chatgpt)
// message prompt

// {
//     user: 'gpt'
//     message: 'crie o nome do artigo'
// }

export const ChatMessage = ({message}) => {
    <div className={`chat-message ${message.user === 'gpt'} && "chatgpt"`}>
        <div className="chat-message-center">
            <div className={`avatar ${message.user === 'gpt' && 'chatgpt'}`}>      
            {message.user === 'gpt' && (<Avatar/>)}          
            </div>
            <div className="message">
                {message.message}
            </div>
        </div>
    </div>
}
