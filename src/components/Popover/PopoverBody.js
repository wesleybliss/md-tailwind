import React from 'react'
import PropTypes from 'prop-types'

const PopoverHeader = ({
    children,
    className,
}) => {
    
    return (
        
        <div className={`text-gray-700 font-normal px-4 pb-4 ${className}`}>
            {children}
        </div>
        
    )
    
}

PopoverHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default PopoverHeader
