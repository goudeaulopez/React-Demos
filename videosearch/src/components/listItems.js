import React from 'react'
import Item from './item'
import '../styles/listitem.css'

const ListItems = props =>{
    const renderList = props.displayList.map(
        item => {
            return <Item ondisplayItem={props.ondisplayItem} key={item.etag}  item={item}/>
        }
    )
    return <div className="listitem">{renderList}</div>
}
export default ListItems