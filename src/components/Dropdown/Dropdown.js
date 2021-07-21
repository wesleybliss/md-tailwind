import React from 'react'
import PropTypes from 'prop-types'
import Ripple from 'material-ripple-effects'
import Tippy from '@tippyjs/react'

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

const Dropdown = ({
    children,
    className,
    buttonText,
    color,
    buttonType,
    size = 'regular',
    placement = 'bottom-start',
    rounded,
    block,
    ripple,
    ...rest
}) => {
    
    const [dropdownShow, setDropdownShow] = React.useState(false);
    const rippleEffect = new Ripple();
    
    let classes = [];
    
    rounded = rounded ? 'rounded-full' : 'rounded';
    
    const sharedClasses = [
        block && 'w-full',
        'flex',
        'items-center',
        'justify-center',
        'gap-1',
        'rounded-lg',
        'font-bold',
        'outline-none',
        'capitalize',
        'tracking-wider',
        'focus:outline-none',
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
        filledShadowColors[color],
        filledShadowHoverColors[color],
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
        'py-1.5 pl-5 pr-3',
        'text-sm',
        'leading-normal',
    ]
    
    const buttonRegular = [
        ...sharedClasses,
        'p-2.5 pl-7 pr-5',
        'text-sm',
        'leading-normal',
    ]
    
    const buttonLG = [
        ...sharedClasses,
        'py-3 pl-8 pr-6',
        'text-base',
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
        
        <div>
            
            <Tippy
                content={
                    <div
                        className={`bg-white text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 p-2 overflow-hidden transition-all duration-500`}
                        style={{ minWidth: '10rem' }}
                    >
                        {children}
                    </div>
                }
                animation="scale"
                trigger="click"
                offset={[0, 0]}
                placement={placement}
                interactive>
                
                <button
                    {...rest}
                    className={`${classes} ${className}`}
                    type="button"
                    onClick={() => setDropdownShow(!dropdownShow)}
                    onMouseUp={(e) => {
                        ripple === 'dark' && rippleEffect.create(e, 'dark');
                        ripple === 'light' && rippleEffect.create(e, 'light');
                    }}>
                    
                    {buttonText}
                    
                    <span className="material-icons text-lg leading-none align-middle">
                        {dropdownShow ? 'arrow_drop_up' : 'arrow_drop_down'}
                    </span>
                    
                </button>
                
            </Tippy>
            
        </div>
        
    )
    
}

Dropdown.displayName = 'Dropdown'

Dropdown.defaultProps = {
    className: null,
    color: 'lightBlue',
    buttonType: 'filled',
    size: 'regular',
    placement: 'bottom-start',
    rounded: false,
    block: false,
}

Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    buttonText: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
    buttonType: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    placement: PropTypes.string.isRequired,
    rounded: PropTypes.bool.isRequired,
    block: PropTypes.bool.isRequired,
    ripple: PropTypes.string,
}

export default Dropdown
