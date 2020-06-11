import React from 'react'
import '../styles/displayItem.css'

const DisplayItem = props => {

    if(!props.onDisplay){
        return <div style={{marginTop:'100px'}} className="ui text loader">Loading</div>
          
    }
    const videoSrc = `https://www.youtube.com/embed/${props.onDisplay.id.videoId}`;
    return(
        <div className="displayItem" >
            <div>
                 <iframe id="iframe"title="video" src={videoSrc}/>
            </div>
            <div>
              <h4>{props.onDisplay.snippet.title}</h4>
              <p>{props.onDisplay.snippet.description}</p>
            </div>
        </div>
    )
}
export default DisplayItem