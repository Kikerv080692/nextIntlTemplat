"use client"
import * as SC from './ButtonLocation.styled'

export default function ButtonLocation() {
      const handleClick = () => {
        const locationUrl = "https://www.google.com/maps?q=49.1713935,16.6466475";
        window.open(locationUrl, '_blank'); 
    }
    return (
        <SC.WrapperLocationButton>
            <SC.Button onClick={handleClick}><img src="/images/pin.png" alt="location" /></SC.Button>
        </SC.WrapperLocationButton>
    )
}