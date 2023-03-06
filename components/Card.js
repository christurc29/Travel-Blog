import React from "react"

export default function Card(props){
    return(
        <div className="card--container">
            <img className="card--img" src={props.place.imageUrl}/>
            <div className="card--details">
                <h3><img className="location--icon" src="https://static.vecteezy.com/system/resources/previews/004/897/637/original/location-red-icon-simple-design-free-vector.jpg"/>{props.place.location} <a className="google--link" href={`${props.place.googleMapsUrl}`}>View on Google Maps</a></h3>
                <h2>{props.place.title}</h2>
                <h4>{props.place.startDate} - {props.place.endDate}</h4>
                <p>{props.place.description}</p>
            </div>
        </div>
    )
}

