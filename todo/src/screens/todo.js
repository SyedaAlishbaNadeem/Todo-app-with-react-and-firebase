import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { sendTodos } from '../config/firebasemethods';
import { getDatabase, ref, onValue, set} from "firebase/database";
// import { value } from '@mui/material';






export default function Todo() {


  const [texts, setTexts] = useState("");
  const [lists, setLists] = useState([]);
  // let  [values, setValues] = useState("");
  const database = getDatabase();

  let adds = ()=>{
// lists.push (texts);
// console.log(lists);
sendTodos({texts})
// setLists([...lists]);
setTexts ("");
  }


let dltAll = ()=>{
 set (ref (database,'todos'), {texts: null})
setLists([]);
}

let dlt = (i)=>{
set (ref (database,'todos'), {texts: null})
lists.splice(i,1)
setLists([...lists]);
}

let edits = (e, i)=>{
let newVal = prompt('Edit your text', e.texts);
lists[i] = newVal;
setLists([...lists]);
}



let getTodos = ()=>{
  const starCountRef = ref(database, 'todos/');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
 setLists([...Object.values(data)]);
  });
}

useEffect(()=>{
getTodos();
}, []);







  return (
<div>
   <Button className = 'bg-dark d-block m-auto mt-3 text-white'> To do app       {new Date().getFullYear()} </Button>
{/* <Notes/> */}

<br/>


<TextField id="outlined-basic" label="Write your Notes" variant="outlined" 
onChange={(e)=>{
setTexts(e.target.value);
console.log(texts);
;
}} 
value = {texts}
/>


<Button variant ="contained"  className="ms-3 mt-2" onClick = {adds}
> ADD </Button>

<Button variant ="contained"  className="ms-3 mt-2" onClick = {dltAll}
> Delete All </Button>


<>
{lists.map((e,i)=>{
return(
<p key={i} className="bg-light mt-3"> {e.texts} 
<Button variant =" outlined" size="small"  onClick={()=> edits(e ,i)} > Edit <EditIcon /> </Button> 
<Button variant =" outlined" size="small" onClick={dlt}> Del <DeleteIcon /> </Button> 
</p>
)
})}
</>



  
</div>


  )
}
