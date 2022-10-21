// function Button(props) {
//     console.log(props);
//     return <button className= {`btn ${props.className}`} > {props.btnvalue} </button>

// }
// export default Button;

function Button(props){
    return <button onClick={props.func} className= {props.class}>  {props.btnvalue}  </button>

}
export default Button


// function Input(prop){
//      return
// <input {onChange={}} > </input>

// }