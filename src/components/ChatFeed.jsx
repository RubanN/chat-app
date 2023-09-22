import React from 'react'
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {
  const {chats,activeChat,userName,messages} = props;
  const chat = chats && chats[activeChat]
  const renderMessages =()=>{
      const keys = Object.keys(messages);
      return keys.map((key,index)=>{
          const message = messages[key];
          const lastMessageKey = index ===0 ? null : keys[index-1]
      })
  }
  console.log(props,"Chatfeeds");
  return (
    <div>
      ChatFeeeds
    </div>
  )
}

export default ChatFeed