import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from '../screens/login';
import Signin from '../screens/signin';
import Todo from '../screens/todo';
import Home from '../screens/home';








export default function AppRouter() {
  return (
    <div>
        
        <Router>
<Link  to="/"> </Link>
<NavLink className="links" to='signin'> Sign Up   </NavLink >
< NavLink className="links" to ='login'>   Log in  </  NavLink>
<br/>
<br/>
<NavLink to= "todo">  </NavLink>






<Routes>
<Route path="login" element={<Login/>}/>
<Route path="signin" element={<Signin/>}/>
<Route path="todo" element={<Todo/>}/>
<Route path="/" element={<Home/>}/>






</Routes>
</Router>
        
        
        
        
      </div>
  )
}
