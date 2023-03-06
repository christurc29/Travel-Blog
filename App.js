import React from "react"
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    
const travelPlaces = data.map(place => {
    return <Card
        key={place.title}
        place={place}
    />
    
})
    
    return(
        
        <div>
        <Nav/>
        {travelPlaces}
        </div>
    )
}