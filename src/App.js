import React,{ useState, useEffect } from "react";
import './App.css';
import Coment from './components/Coment';
import FormComent from "./components/FormComent";

function App() {

  const [coments, setComents] = useState([])
  const [render, setRender] = useState(false);
  useEffect(async () => {
    const url = "http://localhost:5000/message"
    await fetch(url, { method: "GET" }).then(response => response.json()).then(data => setComents(data))
  }, [render]);


  return(
    <div className="app">
    {coments.map((coment,index) => {
      var [year, mount, day] = coment.created_at.slice(0,10).split("-")
      return (<Coment author={coment.email} content={coment.message} date={`${day}/ ${mount}/ ${year}`} key={index} />)
    })}
    <FormComent setStatus={setRender} status={render}/>
    </div>
  )
}

export default App;
