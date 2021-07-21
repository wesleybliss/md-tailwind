import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({
    children,
    className,
}) => {
    
    return (
        
        <div className={`py-2 ${className}`}>
            <div className="block">
                <ul className="flex pl-0 rounded list-none">{children}</ul>
            </div>
        </div>
        
    )
    
}

Pagination.displayName = 'Pagination'

Pagination.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default Pagination
