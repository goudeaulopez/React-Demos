import React from 'react'
import UserCreate from './userCreate'
import LanguageContext from '../context/languageContext'
import Colorcontext from '../context/colorcontext'


class App extends React.Component{
    state ={language:'English'}
    onchangeLanguage = language =>{
        this.setState({language})
    }
    render(){
        return(
            <div className="ui container">
                 Select Language
                <i style={{paddingLeft:'10px'}} className="flag gb" onClick={()=> this.onchangeLanguage('English')}></i>
                <i style={{paddingLeft:'10px'}} className="flag cl" onClick={()=> this.onchangeLanguage('Spanish')}></i>


                <Colorcontext.Provider value="orange">
                
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                
                </Colorcontext.Provider>
                
            </div>
        )
    }
}
export default App