import React from 'react'
import PropTypes from 'prop-types'

const CardStatus = ({
    className,
    title,
    amount,
}) => {
    
    return (
        
        <div className={`w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right ${className}`}>
            
            <h5 className="text-gray-500 font-light tracking-wide text-base mb-1">
                {title}
            </h5>
            
            <span className="text-3xl text-gray-900">{amount}</span>
            
        </div>
        
    )
    
}

CardStatus.defaultProps = {
    className: null,
}

CardStatus.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
}

export default CardStatus
