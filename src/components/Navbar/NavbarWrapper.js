import React from 'react'
import PropTypes from 'prop-types'

const NavbarWrapper = ({
    className,
    children,
}) => {
    
    return (
        
        <div className={`w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start ${className}`}>
            {children}
        </div>
        
    )
    
}

NavbarWrapper.defaultProps = {
    className: null,
}

NavbarWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default NavbarWrapper
