import React from 'react'
import PropTypes from 'prop-types'

const PopoverContainer = ({
    children,
    className
}) => {
    
    return (
        
        <div
            className={`bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg shadow-xl ${className}`}>
            {children}
        </div>
        
    )
    
}

PopoverContainer.defaultProps = {
    className: null,
}

PopoverContainer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default PopoverContainer
