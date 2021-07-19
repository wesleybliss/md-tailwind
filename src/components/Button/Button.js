import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Ripple from 'material-ripple-effects'

import 'tailwindcss/tailwind.css'
import {
    filledBgColors,
    filledBgHoverColors,
    filledBgFocusColors,
    filledBgActiveColors,
    filledShadowColors,
    filledShadowHoverColors,
    outlineTextColors,
    outlineBorderColors,
    outlineBgHoverColors,
    outlineBorderHoverColors,
    outlineTextHoverColors,
    outlineBgActiveColors,
} from './styles'

const Button = forwardRef(
    (
        {
            children,
            className,
            color,
            buttonType,
            size,
            rounded,
            iconOnly,
            block,
            ripple,
            ...rest
        },
        ref
    ) => {
        
        const rippleEffect = new Ripple();
        let classes = [];
        
        rounded = rounded ? 'rounded-full' : 'rounded-lg';
        
        const sharedClasses = [
            block && 'w-full',
            'flex',
            'items-center',
            'justify-center',
            'gap-1',
            'font-bold',
            'outline-none',
            'uppercase',
            'tracking-wider',
            'focus:outline-none',
            'focus:shadow-none',
            'transition-all',
            'duration-300',
            rounded,
        ]
        
        const buttonFilled = [
            'text-white',
            filledBgColors[color],
            filledBgHoverColors[color],
            filledBgFocusColors[color],
            filledBgActiveColors[color],
            // filledShadowColors[color],
            // filledShadowHoverColors[color],
        ]
        
        const buttonOutline = [
            'bg-transparent',
            'border',
            'border-solid',
            'shadow-none',
            outlineTextColors[color],
            outlineBorderColors[color],
            outlineBgHoverColors[color],
            outlineBorderHoverColors[color],
            outlineTextHoverColors[color],
            outlineBgHoverColors[color],
            outlineBgActiveColors[color],
        ]
        
        const buttonLink = [
            `bg-transparent`,
            outlineTextColors[color],
            outlineBgHoverColors[color],
            outlineTextHoverColors[color],
            outlineBgHoverColors[color],
            outlineBgActiveColors[color],
        ]
        
        const buttonSM = [
            ...sharedClasses,
            iconOnly ? 'w-8 h-8 p-0 grid place-items-center' : 'py-1.5 px-4',
            'text-xs',
            'leading-normal',
        ]
        
        const buttonRegular = [
            ...sharedClasses,
            iconOnly ? 'w-10 h-10 p-0 grid place-items-center' : 'py-2.5 px-6',
            'text-xs',
            'leading-normal',
        ]
        
        const buttonLG = [
            ...sharedClasses,
            iconOnly ? 'w-12 h-12 p-0 grid place-items-center' : 'py-3 px-7',
            'text-sm',
            'leading-relaxed',
        ]
        
        if (size === 'sm') {
            classes.push(...buttonSM)
        } else if (size === 'lg') {
            classes.push(...buttonLG)
        } else {
            classes.push(...buttonRegular)
        }
        
        if (buttonType === 'outline') {
            classes.push(...buttonOutline)
        } else if (buttonType === 'link') {
            classes.push(...buttonLink)
        } else {
            classes.push(...buttonFilled)
        }
        
        classes = classes.join(' ')
        
        return (
            
            <button
                {...rest}
                className={`${classes} ${className}`}
                ref={ref}
                onMouseUp={(e) => {
                    ripple === 'dark' && rippleEffect.create(e, 'dark');
                    ripple === 'light' && rippleEffect.create(e, 'light');
                }}>
                
                {children}
                
            </button>
            
        )
        
    }
    
)

Button.defaultProps = {
    color: 'lightBlue',
    buttonType: 'filled',
    size: 'regular',
    rounded: false,
    block: false,
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
    buttonType: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    rounded: PropTypes.bool.isRequired,
    block: PropTypes.bool.isRequired,
    ripple: PropTypes.string,
};

export default Button
