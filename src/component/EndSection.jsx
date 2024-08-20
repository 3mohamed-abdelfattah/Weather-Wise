import React from 'react'
import SunnyIcon from '../assets/img/partly-sunny.png'
import RainyIcon from '../assets/img/rainy.png'
import '../assets/style/EndSecStyle.css'

export default function EndSection() {
    return (
        <div className="end-section">
            <button id="yesterday" className="arrow-left" style={{ paddingLeft: '2%' }}>‹ Yesterday</button>
            <div className="forecast-today">
                <p className="todayTxt">Today <br /><span className="dotTxt">.</span></p>
                <div className="forecast-hours">
                    <div className="hour">
                        <p>6 AM</p>
                        <img src={SunnyIcon} />
                        <p>25°C</p>
                    </div>
                    <div className="hour active">
                        <p className="current-hour">2 PM</p>
                        <img src={RainyIcon} />
                        <p className="current-degree">18°C</p>
                    </div>
                    <div className="hour">
                        <p>4 PM</p>
                        <img src={SunnyIcon} />
                        <p>39°C</p>
                    </div>
                    <div className="hour">
                        <p>6 PM</p>
                        <img src={SunnyIcon} />
                        <p>36°C</p>
                    </div>
                    <div className="hour">
                        <p>8 PM</p>
                        <img src={SunnyIcon} />
                        <p>34°C</p>
                    </div>
                    <div className="hour">
                        <p>10 PM</p>
                        <img src={SunnyIcon} />
                        <p>34°C</p>
                    </div>
                    <div className="hour">
                        <p>12 PM</p>
                        <img src={SunnyIcon} />
                        <p>33°C</p>
                    </div>
                    <div className="hour">
                        <p>2 AM</p>
                        <img src={SunnyIcon} />
                        <p>32°C</p>
                    </div>
                    <div className="hour">
                        <p>4 AM</p>
                        <img src={SunnyIcon} />
                        <p>32°C</p>
                    </div>
                </div>
            </div>
            <button id="tomorrow" className="arrow-right" style={{ paddingRight: '2%' }}>Tomorrow ›</button>
        </div>
    )
}
