import React from "react";
import { useState } from "react";
import Button from './button'


function Notes() {
  const [text, setText] = useState();
  const [list, setList] = useState([]);


  function add() {
    list.push(text);
    console.log(list);
    setList([...list]);
    setText ([...text]);
  }


  let deleteItem = (i) =>{
    list.splice(i,1)
    setList([...list])
  };


  let editItem = (e,i) =>{
    let newValue = prompt("Edit the text", e);
    list[i] = newValue;
    setList([...list])
  };
  

  let deleteAll = () =>{
    setList([]);
  };






  return (
    <div className="Notes">
      <header className="App-header">


        <h1> Input your text </h1>
        <input
          onChange={(e) => {
            setText(e.target.value);
            console.log(text);
          }}
        />

        <br />

        <button className="add" onClick={add}> Add</button>


        
        {/* <Button btnvalue="abc" /> */}
        <Button btnvalue = "Delete All" func= {deleteAll} class="delete" />

        {/* <Button btnValue = "abc"   className = "yes"/> */}


        {/* <ul>
          {list.map((e, i) => {
            return (
              <li
                style={{
                  color: " lightBlue",
                }}
                key={i}
              >
                <button btnvalue={e} />
                {e}
              </li>
            );
          })}
        </ul> */}


        <ul>
      {
list.map((e,i) => {
return <li   style={{
  color: " black",
}} 
key= {i} 
className= "list"> {e} 

<Button btnvalue = "Edit" class="edit" func= {() => editItem(e,i)} />

<Button btnvalue = "Delete" class="delete" func= {() => deleteItem(i)} /></li>
})

}
    </ul>

      </header>
    </div>
  );
}

export default Notes;