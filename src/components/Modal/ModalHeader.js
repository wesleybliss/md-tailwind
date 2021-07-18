import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ModalHeader = ({
    children,
    className,
    toggler,
}) => {
    
    const classes = classnames(
        'mdtw-modal-header',
        'flex items-center justify-between mb-6',
        className
    )
    
    return (
        
        <div className={classes}>
            
            <h5 className="mdtw-modal-header-title text-2xl font-bold mt-0 mb-0">
                {children}
            </h5>
            
            <button
                className="mdtw-modal-header-cta p-1 bg-transparent absolute top-2 right-4 text-3xl leading-none outline-none focus:outline-none"
                onClick={toggler}>
                <span className="text-3xl block">&times;</span>
            </button>
            
        </div>
        
    )
    
}

ModalHeader.defaultProps = {
    className: null,
}

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    toggler: PropTypes.func.isRequired,
}

export default ModalHeader
