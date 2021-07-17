import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ModalFooter = ({
    children,
    className,
}) => {
    
    const classes = classnames(
        'flex',
        'items-center',
        'justify-end',
        'gap-4',
        className,
    )
    
    return (
        
        <div className={classes}>
            {children}
        </div>
        
    )
    
}

ModalFooter.defaultProps = {
    className: null,
}

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ModalFooter
