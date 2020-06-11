import React from 'react'
import Search from './search'
import youtube from '../apis/youtube'
import ListItems from './listItems'
import "../styles/app.css"
import DisplayItem from './displayItem'

class App extends React.Component{
    state={list:[], onSelected:null}
    componentDidMount(){
      this.onSearchVideo('superman')
    }
    onSearchVideo = async (term) =>{
        const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });
        this.setState({list:response.data.items,onSelected:response.data.items[0]})
        console.log(this.state.list)
    }
    ondisplayItem = selected =>{
         this.setState({onSelected:selected})
    }
    render(){
        return(
            <div className="app">
                <Search onSearchVideo={this.onSearchVideo}/>
                <div className="content">
                    <DisplayItem onDisplay={this.state.onSelected}/>
                    <ListItems displayList={this.state.list} ondisplayItem={this.ondisplayItem}/>
                </div>
            </div>
        )
    }
}
export default App