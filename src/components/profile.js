import { token } from 'morgan';
import React, { useEffect, useState } from 'react';
import Messages from './message.js';


const Profile =  () => {
  const [messages, setMessages] = useState([]);

 useEffect(() => {
  const fetchMessageData = async () => {
    try {
      const token = window.localStorage.getItem('token')
      const response = await fetch('https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
      },
     
    });
      const data = await response.json();
      console.log(data)
      setMessages(data.data.messages);
      console.log(setMessages)//******where can i find a post's id? token is data.data.token//
    } catch (error) {
      throw error;
    }
  }
  fetchMessageData();
}, []);
  return (
    <div>
      <h2>Welcome to your Profile!</h2>
      <Messages/>
      <br/>
      <br/>
       {/* <Singleuserposts/>  */}
      <div>
        {
          messages.length ? messages.map((message, idx) => {
            return <div key={message.id}>
              <h3>{message.subject}</h3>
              <div>{message.content}</div>
              </div>
          }) : <div>You have no messages.</div>
        }
      </div>

    </div>
      
  )
}
export default Profile;