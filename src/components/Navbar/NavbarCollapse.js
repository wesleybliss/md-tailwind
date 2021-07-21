import React from 'react'
import PropTypes from 'prop-types'

const NavbarCollapse = ({
    children,
    className,
    open
}) => {
    
    return (
        
        <div
            className={`lg:flex flex-grow items-center ${
                open ? 'block' : 'hidden'
            } ${className}`}>
            
            {children}
            
        </div>
        
    )
    
}

NavbarCollapse.displayName = 'NavbarCollapse'

NavbarCollapse.defaultProps = {
    className: null,
}

NavbarCollapse.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    open: PropTypes.bool.isRequired,
}

export default NavbarCollapse
