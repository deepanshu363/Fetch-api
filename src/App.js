import React from "react";
import { useState, useEffect } from "react";
import Buttoncard from "./components/Buttoncard/index";
import Displaycard from "./components/Displaycard/index";
import './App.scss'

const App=()=>{
  const that=this;
  const [buttonName, setButtonName] = useState([]);
  const [showData, setShowData] = useState("");
   var req;
  function fetchData(id) {
   
    console.log(id);
    console.log(buttonName[id]);
     req = buttonName[id];
    const url = `https://api.chucknorris.io/jokes/random?category=${req}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setShowData(data.value));
  }
  console.log(req);
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((data) => {
        return data.json();
      })
      .then((list) => {
        // postListJSX = list.data.map((post) => <div>Hello</div>);
        // console.log(list);
        setButtonName([...list]);
      });
  }, []);
  console.log(buttonName);
  return (
    <div id="final-render">
      <Buttoncard data={buttonName} onClick={fetchData}></Buttoncard>
      <Displaycard data={showData} category={req}></Displaycard>
    </div>
  );
}

export default App;
