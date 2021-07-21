import React from 'react'
import PropTypes from 'prop-types'

const TooltipContent = ({
    children,
    className,
}) => {
    
    return (
        
        <div className={`px-2.5 py-1.5 bg-black bg-opacity-80 text-white text-sm rounded ${className}`}>
            {children}
        </div>
        
    )
    
}

TooltipContent.displayName = 'TooltipContent'

TooltipContent.defaultProps = {
    className: null,
}

TooltipContent.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default TooltipContent
