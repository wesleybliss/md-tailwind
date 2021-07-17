import React from 'react'
import PropTypes from 'prop-types'

const CardRow = ({
    children,
    className,
}) => {
    
    return (
        
        <div className={`flex flex-wrap border-b border-gray-200 ${className}`}>
            {children}
        </div>
        
    )
    
}

CardRow.defaultProps = {
    className: null,
}

CardRow.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default CardRow
