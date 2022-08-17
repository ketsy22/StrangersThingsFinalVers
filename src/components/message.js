import React, {useEffect, useState} from "react";

const CreateMessage = () => 
{
  const [content , setContent] = useState([]);
  const [subject, setSubject] = useState([]);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
         
        const token = window.localStorage.getItem('token')
            const response = await fetch ('https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts/${token}/messages', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                  message: {
                    content: ""
                  }
                })           
            });
            const data = await response.json();
            window.localStorage.getItem('token', data.data.token);
            setContent('');
            setSubject('');
            return data;    
    }
    return (
        <div>
        <h3> Send a message:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="subject" value={subject} onChange= {(evt) => setSubject(evt.target.value)}></input>
                <input type="text" placeholder="body" value={content} onChange={(evt) => setContent(evt.target.value)}></input>
                
                <button type="submit" className="btn-outline-primary">Send</button>
            </form>
            <div>
                
            </div>
        </div>
    )
}
export default CreateMessage;