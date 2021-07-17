import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react'
import { roundArrow } from 'tippy.js'

const Popover = forwardRef(({
    children,
    className,
    placement,
}, ref) => {
    
    return (
        
        <Tippy
            content={children}
            placement={placement}
            reference={ref}
            trigger="click"
            animation="shift-away"
            arrow={roundArrow}
            className={`arrow-light ${className}`}
            interactive
        />
        
    )
    
})

Popover.defaultProps = {
    className: null,
    placement: 'top',
}

Popover.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    placement: PropTypes.string.isRequired,
};

export default Popover
