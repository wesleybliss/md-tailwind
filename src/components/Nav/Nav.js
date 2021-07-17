import React from 'react'
import PropTypes from 'prop-types'

const Nav = ({
    children,
    className,
    leftSide,
}) => {
    
    return (
        
        <ul
            className={`flex lg:items-center flex-col lg:flex-row list-none ${
                leftSide ? 'mr-auto' : 'ml-auto'
            } ${className}`}>
            {children}
        </ul>
        
    )
    
}

Nav.defaultProps = {
    className: null,
    leftSide: false,
}

Nav.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftSide: PropTypes.bool.isRequired,
}

export default Nav
