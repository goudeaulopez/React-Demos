import React from 'react'
import '../styles/search.css'

class Search extends React.Component{
    state={ search:''}
    onChangeSearch = event => {
        this.setState({ search: event.target.value })
    }
    onSubmitSearch = event =>{
        event.preventDefault();
        this.props.onSearchVideo(this.state.search)
    }
    render(){
        return(
           <div className="search">
                <i id="icon" className="youtube icon"></i>
                   <form onSubmit={this.onSubmitSearch} className="form input-group">
                    <input value={this.state.search} onChange={this.onChangeSearch} className="form-control"/>
                    <button type="submit" className="btn btn-primary"><i className="search icon"></i></button>
                </form>
           </div>
        )
    }
}
export default Search 

/*
  <div className="navbar navbar-light bg-light">
                
               
            </div>

  <form className="input form input-group ">
                    <i className="navbar-brand youtube icon red"></i>
                     <input className="form-control" style={{width:"50%"}}/>
                     <span className="input-group-btn">
                       <button type="submit" className="btn btn-primary"><i className="search icon"></i></button>
                    </span>
                </form> 


*/