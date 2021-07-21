import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react'
import { roundArrow } from 'tippy.js'

const Tooltip = forwardRef(({
    children,
    className,
    placement,
}, ref) => {
    
    return (
        
        <Tippy
            content={children}
            placement={placement}
            reference={ref}
            animation="shift-away"
            arrow={roundArrow}
            className={`arrow-dark ${className}`}
            interactive
        />
        
    )
    
})

Tooltip.displayName = 'Tooltip'

Tooltip.defaultProps = {
    className: null,
    placement: 'top',
}

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    placement: PropTypes.string.isRequired,
}

export default Tooltip
