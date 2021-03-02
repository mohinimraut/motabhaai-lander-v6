import React, {useState} from 'react'
import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({text}) => {
    const [isHovering, setHovering] = useState(false);

    const handleMouseHover = () => {
        setHovering(!isHovering)
    }

    return (
        <div className="pin" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
            <Icon icon={locationIcon} className="pin-icon"/>
            {
                isHovering &&
                <div>
                    {text}
                </div>
            }
            
        </div>
    )

}

export default LocationPin