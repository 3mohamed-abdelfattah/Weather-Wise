import SunnyIcon from '../assets/img/partly-sunny.png'
import '../assets/style/EndSecStyle.css'

export default function EndSection(props) {

    return (
        <div className="end-section">
            <button id="yesterday" className="arrow-left" onClick={() => props.dayChange(-1)} style={{ paddingLeft: '2%' }}>‹ Yesterday</button>
            <div className="forecast-today">
                <p className="todayTxt" onClick={() => props.dayChange(0)}>Today <br /><span className="dotTxt">.</span></p>
                <div className="forecast-hours">
                    <div className="hour">
                        <p>6 AM</p>
                        <img src={SunnyIcon} />
                        <p>25°C</p>
                    </div>
                    <div className="hour active">
                        <p className="current-hour">{props.currentHour}</p>
                        <img src={SunnyIcon} />
                        <p className="current-degree">{props.temperature}</p>
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
            <button id="tomorrow" className="arrow-right" onClick={() => props.dayChange(1)} style={{ paddingRight: '2%' }}>Tomorrow ›</button>
        </div>
    )
}
