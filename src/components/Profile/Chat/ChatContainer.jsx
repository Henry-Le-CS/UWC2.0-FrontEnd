import ChatHeader from './ChatHeader'
import ChatDisplay from './ChatDisplay'
import { useState } from 'react'

const ChatContainer = ({ user }) => {
    const [ clickedUser ] = useState(null)

    return (
        <div className="chat-container">
            <ChatHeader user={user}/>
            {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser}/>}
        </div>
    )
}

export default ChatContainer