import React, { useState } from 'react'
import ResourceList from './resourceList'
import UserList from './userList'

const App = () =>{
    const [resource, setResource] = useState('Posts')
        return(
            <div>
                <UserList/>
                <div>
                    <button onClick={()=>setResource('Posts')}>Profile</button>
                    <button onClick={()=>setResource('Todos')}>Todos</button>
                </div>
                <ResourceList resource={resource}/>
            </div>
        )
}
export default App












/*
//**** until 321 
import React from 'react'

class App extends React.Component{
    state = {resources: 'Profile'}
    render(){
        return(
            <div>
                <div>
                    <button onClick={()=>this.setState({resources:'Profile'})}>Profile</button>
                    <button onClick={()=>this.setState({resources:'Todos'})}>Todos</button>
                </div>
                {this.state.resources}
            </div>
        )
    }
}
export default App


*/