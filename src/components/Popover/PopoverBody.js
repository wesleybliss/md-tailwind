import React from 'react'
import PropTypes from 'prop-types'

const PopoverBody = ({
    children,
    className,
}) => {
    
    return (
        
        <div className={`text-gray-700 font-normal px-4 pb-4 ${className}`}>
            {children}
        </div>
        
    )
    
}

PopoverBody.displayName = 'PopoverBody'

PopoverBody.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default PopoverBody
