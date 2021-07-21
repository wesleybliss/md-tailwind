import React from 'react'
import PropTypes from 'prop-types'

const CardFooter = ({
    children,
    className,
}) => {
    
    return (
        
        <div className={`p-4 ${className}`}>
            {children}
        </div>
        
    )
    
}

CardFooter.displayName = 'CardFooter'

CardFooter.defaultProps = {
    className: null,
}

CardFooter.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default CardFooter
