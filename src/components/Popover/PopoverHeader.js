import React from 'react'
import PropTypes from 'prop-types'

const PopoverHeader = ({
    children,
    className,
}) => {
    
    return (
        
        <div className={`text-gray-900 p-4 pb-2 uppercase font-bold ${className}`}>
            {children}
        </div>
        
    )
    
}

PopoverHeader.displayName = 'PopoverHeader'

PopoverHeader.defaultProps = {
    className: null,
}

PopoverHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default PopoverHeader
