import React, { useEffect, useState } from 'react'

export default function ChatsPage() {

    const [chats, setChats] = useState([])

    const fetchChats = async () => {
        const data = await fetch('http://localhost:5000/api/chat')
        const actualData = await data.json()
        setChats(actualData)
    }

    useEffect(() => {
        fetchChats()
    }, [])

    return (
        <div>
            {
                chats && chats.map((ele) =>
                    <div key={ele._id} >
                        <p>{ele.chatName}</p>
                    </div>)
            }
        </div>
    )
}
