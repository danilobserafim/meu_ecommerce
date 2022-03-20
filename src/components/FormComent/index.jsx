import React, { useState } from 'react';
import style from "./FormComent.module.scss";

export default function FormComent(props) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const sendMessage = () => {
    if (author === '' || content === '') {
      alert("verifique credenciais e tente novamente")
      
    } else {
      const url = "http://localhost:5000/message/"
      const bodyForm = {
        email: author,
        message: content
      }
      fetch(url,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(bodyForm)

      }).then(response => response.json()).then(data =>{
        if (data.id) {
          props.setStatus(!props.status)
        }
      })
      setAuthor('')
      setContent('')
    }
  }

  return <div className={style.form}>

    <h2>Deixe seu comentario</h2>
    <input type="text" name="email" id="email" placeholder='E-mail' value={author} onChange={(event) => setAuthor(event.target.value)} />
    <textarea name="comentario" id="comentario" placeholder='Comentario' value={content} onChange={(event) => setContent(event.target.value)
} />
    <button onClick={sendMessage}>enviar</button>

  </div>;
}
