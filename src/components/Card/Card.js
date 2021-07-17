import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Card = ({
    children,
    className,
}) => {
    
    const classes = classnames(
        'w-full',
        'bg-white',
        'rounded-xl',
        'overflow-hdden',
        'shadow-md',
        'p-4',
        className,
    )
    
    return (
        
        <div className={classes}>
            {children}
        </div>
        
    )
    
}

Card.defaultProps = {
    className: null,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default Card
