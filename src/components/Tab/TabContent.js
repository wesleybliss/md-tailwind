import React from 'react'
import PropTypes from 'prop-types'

const TabContent = ({
    children,
    className,
}) => {
    
    return (
        
        <div className={`relative flex flex-col min-w-0 break-words w-full px-4 pb-4 ${className}`}>
            
            <div className="flex-auto text-center font-light leading-normal">
                {children}
            </div>
            
        </div>
        
    )
    
}

TabContent.defaultProps = {
    className: null,
}

TabContent.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default TabContent
