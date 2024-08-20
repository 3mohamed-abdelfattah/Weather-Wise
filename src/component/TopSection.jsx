import React from 'react'
import '../assets/style/TopSecStyle.css'

export default function TopSection() {
    return (
        <div className="top-section">
            <div className="location-info">
                <div className="date-location">
                    <p className="date">July 24, 2024</p>
                    <p className="location">Bangalore, India</p>
                </div>
                <p className="temperature">18°C</p>
            </div>
            <div className="weather-icon">
                <img style={{ width: 200 }} src="https://s3-alpha-sig.figma.com/img/d6b0/8e40/6b03c91953a7c9f5bcd08d152a0f8491?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q80xRsEpfivjGtdQDZA3tu~B5N22-qvEI80RNTFGIJ37RzFYXj86DRK-OdONLcGaFdw4vcmfeHIP3LnsEEQyCDfWGQVD8A~RN0~ZTZCRNq7f9YIr5HIfEwIxo647E7xh7JZHeWOZMQreHJCH0wpZzgZ5KJCX72YxFrz489gThmba-VR8FT~5wtW5cRN0LPyPUyqvQXY7Oi5TdDV4f~xuoyAIND0Ir2C-iByNO5xu6BrqWlwne0ynhg3j2dVwkIzXAp0Sl3BOwmjSLG0uY2R6slSjoUMO-HvgxslnqjN7NTI5w9G1nnsOKILdcgIIF4GoPNJ0w~GxySnBLkF8L9-HRQ__" alt="Icon" />
            </div>
        </div>
    )
}
