import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const colors = {
    blueGray: 'bg-blue-gray-500',
    gray: 'bg-gray-500',
    brown: 'bg-brown-500',
    deepOrange: 'bg-deep-orange-500',
    orange: 'bg-orange-500',
    amber: 'bg-amber-500',
    yellow: 'bg-yellow-600',
    lime: 'bg-lime-500',
    lightGreen: 'bg-light-green-500',
    green: 'bg-green-500',
    teal: 'bg-teal-500',
    cyan: 'bg-cyan-500',
    lightBlue: 'bg-light-blue-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    deepPurple: 'bg-deep-purple-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    red: 'bg-red-500',
}

const ClosingAlert = ({
    children,
    className,
    color,
    ...rest
}) => {
    
    const [showAlert, setShowAlert] = React.useState(true)
    
    const closeAlert = (e) => {
        
        let delay
        const parentClassName = e.target.parentNode.parentNode
        
        parentClassName.classList.add('opacity-0')
        
        Array.from(parentClassName.classList).map((el) =>
            el.includes('duration') ? (delay = el.split('-')[1]) : null
        )
        
        setTimeout(
            () => setShowAlert(false),
            delay ? parseInt(delay, 10) + 100 : 250
        )
        
    }
    
    const classes = classnames(
        'flex',
        'items-center',
        'gap-3',
        'text-white',
        'p-4',
        'pr-12',
        'border-0',
        'rounded-lg',
        'relative',
        'mb-4',
        'transition-all',
        'duration-300',
        colors[color],
        className,
    )
    
    if (!showAlert) return null
    
    return (
        
        <div className={classes} {...rest}>
            
            {children}
            
            <button
                className="absolute right-4 top-1/3 transform -translate-y-1/3 w-6 h-6 bg-transparent text-2xl outline-none focus:outline-none"
                onClick={closeAlert}>
                <span className="leading-none text-4xl">&times;</span>
            </button>
            
        </div>
        
    )
    
}

ClosingAlert.displayName = 'ClosingAlert'

ClosingAlert.defaultProps = {
    className: null,
    color: 'lightBlue',
}

ClosingAlert.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    color: PropTypes.string.isRequired,
}

export default ClosingAlert
