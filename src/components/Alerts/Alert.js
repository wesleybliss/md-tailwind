import React from 'react'
import PropTypes from 'prop-types'
import { useClasses } from './styles'

import '../../index.css'

const Alert = ({
    children,
    className,
    color,
    variant,
    severity,
    icon,
    ...rest
}) => {
    
    const classes = useClasses({
        className,
        color,
        variant,
        severity,
        icon,
    })
    
    return (
        
        <div className={classes} {...rest}>
            {icon}
            {children}
        </div>
        
    )
    
}

Alert.displayName = 'Alert'

Alert.defaultProps = {
    className: null,
    color: 'lightBlue',
    severity: 'success',
    variant: 'standard',
    icon: null,
}

Alert.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    color: PropTypes.string.isRequired,
    variant: PropTypes.oneOfType([
        PropTypes.oneOf(['filled', 'outlined', 'standard']),
        PropTypes.string,
    ]),
    severity: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
    icon: PropTypes.node,
}

export default Alert
