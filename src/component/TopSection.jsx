import React from 'react'
import '../assets/style/TopSecStyle.css'
import IconGif from '../assets/img/rainy-girl.gif'

export default function TopSection(props) {
    return (
        <div className="top-section">
            <div className="location-info">
                <div className="date-location">
                    <p className="date">{props.date ? props.date : "July 24, 2024"}</p>
                    <p className="location">{props.location ? props.location : "Bangalore, India"}</p>
                </div>
                <p className="temperature">{props.temperature ? props.temperature : "18°C"}</p>
            </div>
            <div className="weather-icon">
                <img style={{ width: 200 }} src={IconGif} alt="Icon Gif" />
            </div>
        </div>
    )
}
