import React from 'react'
import LanguageContext from '../context/languageContext'
import ColorContext from '../context/colorcontext'

class Button extends React.Component{
   //static contextType = LanguageContext

   renderSubmit = value => {
       return value === 'English'? 'Submit': 'Enviar'
   }
   renderColor = color =>{
       return (
                <button className={`ui button ${color}`} >
                    <LanguageContext.Consumer>
                        {value => this.renderSubmit(value)}
                    </LanguageContext.Consumer>
                </button>
            )
   }

    render(){
       // const text = this.context === 'English'? 'submit' : 'Enviar'
       // return <button className="ui button primary" >{text}</button>

       return(
           <ColorContext.Consumer>
                {color => this.renderColor(color)}
           </ColorContext.Consumer>
       )
       
       
       
       
       
    }
}
export default Button