import React from 'react'
import '../styles/imageDetails.css'

const ImageDetail = props => {
    return (
        <div className="imagedetails">
            <i onClick={()=> props.onOption('list')} className="window close icon"></i>
            <img src={props.select.urls.raw}/>
            
        </div>
    )
}
export default ImageDetail