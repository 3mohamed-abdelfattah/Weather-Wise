import React from 'react'
import '../assets/style/MidSecStyle.css'

export default function MiddleSection(props) {
    return (
        <div className="mid-section">
            <h1 className="day">{props.day ? props.day : "WEDNESDAY"}</h1>
            <h4 className="status">{props.condition ? props.condition : "Showers"}</h4>
        </div>
    )
}
