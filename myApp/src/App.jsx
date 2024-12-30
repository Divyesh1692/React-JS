import './App.css'
import {Test} from "./Test";
export const App=()=> {
  
  let users = [{name:"user1"},{name:"user2"},{name:"user3"}]
  return (<div>
    <h1>Users</h1> 
    { users.map((user)=>(<Test {...user}/>))
      }
  </div>
   )
}


