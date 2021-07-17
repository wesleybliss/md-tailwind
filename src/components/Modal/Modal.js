import React from 'react'
import PropTypes from 'prop-types'
import { useClasses } from './styles'

import 'tailwindcss/tailwind.css'

const sizeMap = {
    sm: 'max-w-sm',
    lg: 'max-w-6xl',
}

const Modal = ({
    children,
    makeClasses,
    wrapperClassName,
    modalClassName,
    modalInnerClassName,
    overlayClassName,
    size,
    active,
    toggler,
}) => {
    
    const modalSize = sizeMap[size] || 'max-w-3xl'
    const classes = makeClasses(useClasses({
        wrapperClassName,
        modalClassName,
        modalInnerClassName,
        overlayClassName,
        size,
        modalSize,
        active,
    }))
    
    return (
        <>
            
            <div className={classes.wrapper} onClick={toggler}>
                <div className={classes.modal}>
                    <div
                        className={classes.modalInner}
                        onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
            
            <div className={classes.overlay} />
            
        </>
    )
    
}

// Modal.displayName = 'Modal'

Modal.defaultProps = {
    makeClasses: classes => classes,
    wrapperClassName: null,
    modalClassName: null,
    modalInnerClassName: null,
    overlayClassName: null,
    size: 'regular',
    active: false,
    toggler: () => {},
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    makeClasses: PropTypes.func.isRequired,
    wrapperClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    modalInnerClassName: PropTypes.string,
    overlayClassName: PropTypes.string,
    size: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    toggler: PropTypes.func.isRequired,
};

export default Modal
