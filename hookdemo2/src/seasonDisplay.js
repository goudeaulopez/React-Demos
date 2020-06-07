import React from 'react'
import './SeasonDisplay.css';

const SeasonConfig = {
    summer:{
      text:'Lets hit the beach!',
      iconName:'sun'
    },
    winter:{
        text:'Burr it is cold!',
        iconName:'snowflake'
    }
}
const getSeason = (lat,month) => {
    console.log(lat)
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    }
    else{
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = props =>{
    const season = getSeason(props.lat, new Date().getMonth() )
    const {text,iconName} = SeasonConfig[season]
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
              <h3>{text}</h3>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    )
}
export default SeasonDisplay

