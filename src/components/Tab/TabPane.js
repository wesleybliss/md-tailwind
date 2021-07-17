import React from 'react'
import PropTypes from 'prop-types'

const TabPane = ({
    children,
    className,
    active,
}) => {
    
    return (
        
        <div className={`${active ? 'block' : 'hidden'} ${className}`}>
            {children}
        </div>
        
    )
    
}

TabPane.defaultProps = {
    className: null,
    active: false,
}

TabPane.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    active: PropTypes.bool.isRequired,
}

export default TabPane
