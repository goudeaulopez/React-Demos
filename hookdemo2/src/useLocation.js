import {useState,useEffect} from 'react'

export default () =>{
    const [lat, setLat] = useState(null)
    const [errorMessage,setErroMessage] = useState('')

   useEffect(()=>{
    window.navigator.geolocation.getCurrentPosition(
        position => setLat(position.coords.latitude),
        err => setErroMessage(err.message)
    )
   },[]);

   return [lat,errorMessage]
}