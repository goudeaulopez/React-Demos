import React from 'react'
import Search from './search'
import ImageList from './imageList'
import unsplash from '../apis/unsplash'
import '../styles/app.css'
import ImageDetail from './imageDetail'

class App extends React.Component{
    state={list:[], option:'list', selected:''}
    componentDidMount(){
     this.onSearchImage('cars')
    }
    onSelected = (selected,option) => {
        this.setState({selected,option})
    }
    onOption = option =>{
        this.setState({option})
    }
    onSearchImage = async imageSearch => {  
      
      const response = await unsplash.get(
          '/search/photos',
          {
           params:{query:imageSearch}
          }
      )
      if(response.data.results.length === 0){
          this.componentDidMount();
      }
      this.setState({list: response.data.results})
      
    }
    renderHelper(){
      if(this.state.option === 'list'){
        return(
            <div className="app">
                <Search onSearchImage={this.onSearchImage}/>
                <ImageList onListImage={this.state.list} onSelected={this.onSelected}/>
            </div>
        )
      }
      else{
          return <ImageDetail select={this.state.selected} onOption={this.onOption}/>
      }
    }
    render(){
          return <div>{this.renderHelper()}</div>
    }
}
export default App