import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ModalBody = ({
    children,
    className,
}) => {
    
    const classes = classnames(
        'relative',
        'flex-auto',
        className,
    )
    
    return (
        
        <div className={classes}>
            {children}
        </div>
        
    )
    
}

ModalBody.defaultProps = {
    className: null,
}

ModalBody.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default ModalBody
