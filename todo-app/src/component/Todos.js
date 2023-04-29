import React, { useState , useEffect } from "react";
import "./Todoss.css";
import "./ScrollBar.css"
import "./MediaQ.css"
// import "./Button.css"

function getLocalItem(){
let list = localStorage.getItem("lists")

if(list){
  return JSON.parse(list);
}else{
  return []
}
}
export default function Todos() {
  const [onValue, setonValue] = useState("");
  function onChanged(event) {
    setonValue(event.target.value);
  }

  const [inputValue, setinputValue] = useState( getLocalItem());
  function onAdd() {
    if(onValue){
      setinputValue([...inputValue, onValue]);
      setonValue("");
    }else{
      
    }  
  }

  function onDelete(id) {
    const UpdateList = inputValue.filter((curElm, index) => {
      return index !== id;
    });
    setinputValue(UpdateList);
  }

  function onRemove() {
    setinputValue([]);
  }

  //local storage
  
  useEffect(()=>{
    localStorage.setItem("lists", JSON.stringify(inputValue));
  },[inputValue]);
  

  return (
    <>
      <div className="todo-main-body">
        <h1 className="todo-list">TODO LIST</h1>
        <div className="input-add">
          <input
            className="input-text"
            type="text"
            placeholder="...add text"
            value={onValue}
            onChange={onChanged}
          ></input>
          <button className="add" onClick={onAdd}>
            add
          </button>
        </div>
        <h2 className="your-list">YOUR LIST</h2>
        <div className="scroll-bar">
          {inputValue.map((curElm, index) => {
            return (
              <div className="list-items" key={index}>
                <h3 className="items">{curElm}</h3>
                <button className="delete-it" onClick={() => onDelete(index)}>
                  delete it
                </button>
              </div>
            );
          })}
        </div>

        <div>
          {/* <div className="btn"// */}
          {/* <div className="side default-side">Checklist</div>
          <div className="side hover-side">Remove All</div> */}
          <button className="remove-all" onClick={onRemove}>
            Remove All
          </button>
        </div>
      </div>
    </>
  );
}
