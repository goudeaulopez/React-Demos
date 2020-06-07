import React from 'react'
import UseResources from './useResources'

const ResourceList = ({resource}) => {
    const resources = UseResources(resource)
    return (
         <ul>
            {resources.map(
                     record=>{
                     return <li key={record.id}>{record.title}</li>
                     }
                 )}
        </ul>
     )
}

export default ResourceList


/*
****until 326

class ResourceList extends React.Component{
    state={resources:[]}
    async componentDidMount(){
      const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${this.props.resource}`
      )
      this.setState({resources:response.data})
    }
    async componentDidUpdate(prevProps){
         if(prevProps.resource !== this.props.resource){
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${this.props.resource}`
            )
            this.setState({resources:response.data})
         } 
       
    }
    render(){
        return(
            <div>
              {this.state.resources.length}
            </div>
        )
    }
}

****until 333

import React, {useState,useEffect} from 'react'
import axios from 'axios'

const UseResources = (resource) => {
    const [resources, setResources] = useState([])
    const fetchResources = async resource => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${resource}`
        )
        setResources(response.data)
    }
    useEffect(()=>{
        fetchResources(resource)
    },[resource]);
    return resources
}

const ResourceList = ({resource}) => {
    const resources = UseResources(resource)
    return (
         <ul>
            {resources.map(
                     record=>{
                     return <li key={record.id}>{record.title}</li>
                     }
                 )}
        </ul>
     )
}

export default ResourceList



*/