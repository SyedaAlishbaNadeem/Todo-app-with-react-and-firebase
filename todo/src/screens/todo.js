import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { sendTodos } from '../config/firebasemethods';
import { getDatabase, ref, onValue, set} from "firebase/database";
import { useLocation, useNavigate } from 'react-router-dom';
// import { value } from '@mui/material';






export default function Todo() {


let [texts, setTexts] = useState("");
  let [lists, setLists] = useState([]);
  let [key, setKey] = useState([])
  let [uid, setUid] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const database = getDatabase();

  let adds = ()=>{
// lists.push (texts);
// console.log(lists);
sendTodos({texts}, uid);
// setLists([...lists]);
setTexts ("");
  }


let dltAll = ()=>{
 set (ref (database,`todos/${uid}/`), {texts: null})
setLists([]);
}

let dlt = (i, key)=>{
set (ref (database,`todos/${uid}/` + key), {value: null})
lists.splice(i,1)
setLists([...lists]);
}

let edits = (e, i)=>{
let newVal = prompt('Edit your text', texts);
set (ref (database,`todos/${uid}/` + key), {text : newVal})
lists[i] = {texts: newVal};
setLists([...lists]);
}

//getting data from login success state on the page

useEffect(()=>{
if (location.state && location.state.uid) {
  setUid(location.state.uid)
}else {
  navigate('login');
}
}, [])






let getTodos = (uid)=>{
  const starCountRef = ref(database, `todos/${uid}`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
 setLists([...Object.values(data)]);
 setKey([...Object.keys(data)]);
  });
}

console.log(lists);
console.log(key);

useEffect(()=>{
getTodos(uid);
}, [uid]);







  return (
<div>

<Typography variant="h3" className="m-3" > Hi {location.state.userName} </Typography>


   {/* <Button className = 'bg-dark d-block m-auto mt-3 text-white'> To do app  {new Date().getFullYear()} </Button> */}


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
<p key = {key[i]} className="bg-light mt-3"> {e.texts} 
<Button variant =" outlined" size="small"  onClick={()=> edits(e ,i)} > Edit <EditIcon /> </Button> 
<Button variant =" outlined" size="small"  onClick={()=> dlt (key,i)}> Del <DeleteIcon /> </Button> 
</p>
)
})}
</>



  
</div>


  )
}
