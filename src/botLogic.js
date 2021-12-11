import React from 'react'
import responses from './dummyData'
import {getCurrentTime} from './utils'
import {nanoid} from "nanoid"

function makeResponse(message){
    return {
        message: message.answer, 
        timestamp : getCurrentTime(),
        sender: false,
        username : "Bot",
        id : nanoid(),
        chips : message.chips
    }
}

const defaultResponse = () => ({
    message : "I'm a bot, and I'm still in learning phase, I'm having trouble understanding what you need, could you please retry using some other words ?", 
    timestamp : getCurrentTime(),
    sender: false,
    username : "Bot",
    id: nanoid()
})

function respond ({message}, setMessages){
    const keywords = message.split(" ")
    for(let i=0; i<keywords.length; i++){
        const keyword = keywords[i];
        if(responses.hasOwnProperty(keyword)){
            const answer = responses[keyword];
            setMessages(prev => [...prev,makeResponse(answer)]);
            return;
        }
    }
    setMessages(prev => [...prev, defaultResponse()])
}

export {respond};




// var responded = false;
// data.map(({keyword, answer}) => {
//     if (keywords.includes(keyword)){
//         setMessages(prev => [...prev,makeResponse(answer)]);
//         responded = true;
//         return;
//     }
// })
// if(!responded) setMessages(prev => [...prev, defaultResponse()]);
// return;

