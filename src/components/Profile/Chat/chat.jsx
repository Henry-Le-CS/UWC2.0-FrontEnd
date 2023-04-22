import React from "react";

function ChatSection(props) {
  return (
    <div className="chat-section">
      <h2>Chat List</h2>
      <ul>
        {props.chatList.map((chat) => (
          <li key={chat.message}>
            <button onClick={() => props.handleChatClick(chat._id)}>
              <img src={chat.target_url} alt={chat.message} />
              {chat.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatSection;