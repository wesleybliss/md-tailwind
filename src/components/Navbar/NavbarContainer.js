import React from 'react'
import PropTypes from 'prop-types'

const NavbarContainer = ({
    children,
    className
}) => {
    
    return (
        
        <div className={`container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between ${className}`}>
            {children}
        </div>
        
    )
    
}

NavbarContainer.displayName = 'NavbarContainer'

NavbarContainer.defaultProps = {
    className: null,
}

NavbarContainer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default NavbarContainer
