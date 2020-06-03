import React from 'react'
import '../styles/search.css'

class Search extends React.Component{
    state={image: ''}
    onSearchImage = event =>{
         this.setState({image:event.target.value})   
    }
    onSubmitForm = event => {
        event.preventDefault();
        this.props.onSearchImage(this.state.image)
        this.setState({image:''})
    }
    render(){
        return(
            <div className="search">
                <form onSubmit={this.onSubmitForm} className="input form input-group">
                    <input
                        value={this.state.image}
                        onChange={this.onSearchImage}
                        placeholder="Search images..."
                        className="form-control"/>
                    <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Search</button>
                    </span>
                </form>
            </div>
        )
    }
}
export default Search

