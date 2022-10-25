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
import Notes from '../screens/notes';






export default function AppRouter() {
  return (
    <div>
        
        <Router>

<Link to='login'>   Log in  </Link>
<Link to='signin'> Sign in   </Link>
<Link to='todo'> Todo app </Link>
{/* <Link to='notes'> notes  </Link> */}





<Routes>
<Route path="login" element={<Login/>}/>
<Route path="signin" element={<Signin/>}/>
<Route path="todo" element={<Todo/>}/>
{/* <Route path="notes" element={<Notes/>}/> */}

</Routes>
</Router>
        
        
        
        
      </div>
  )
}
