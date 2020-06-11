import React from 'react'
import '../styles/item.css'

const Item = props =>{
    return(
        <div className="item" onClick={()=>props.ondisplayItem(props.item)}>
            <img src={props.item.snippet.thumbnails.medium.url}/>
            <div id="title">{props.item.snippet.title}</div>
       </div>
    )
}
export default Item