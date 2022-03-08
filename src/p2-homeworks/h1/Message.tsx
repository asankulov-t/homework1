import React from 'react'
import message from './Message.module.css'

type MessageType={
    avatar:string
    name:string
    message:string
    time:string
}

function Message(props:MessageType) {
    return (
        <div>
            <div className={message.wrapper}>
                <img src={props.avatar} alt=""/>
                <div className={message.message}>
                    <h5 className={message.name}>{props.name}</h5>
                    <p>{props.message} </p>
                    <p className={message.time}>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
