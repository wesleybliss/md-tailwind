import classnames from 'classnames'

export const useClasses = ({
    className,
    modalClassName,
    modalInnerClassName,
    overlayClassName,
    active,
    size,
    modalSize,
}) => {
    
    const classes = {}
    
    classes.wrapper = classnames(
        'mdtw-wrapper',
        'grid',
        'place-items-center',
        'overflow-x-hidden',
        'overflow-y-auto',
        'fixed',
        'inset-0',
        'z-50',
        'outline-none',
        'focus:outline-none',
        'transition-all',
        'duration-500', {
            'opacity-100 pointer-events-auto': active,
            'opacity-0 pointer-events-none': !active,
        },
        className,
    )
    
    classes.modal = classnames(
        'mdtw-modal',
        'transform',
        'w-auto',
        'my-6',
        'mx-auto',
        'transition-all',
        'duration-500',
        modalSize, {
            'opacity-100 translate-y-0': active,
            'opacity-0 -translate-y-10': !active,
        },
        modalClassName,
    )
    
    classes.modalInner = classnames(
        'mdtw-modalInner',
        'flex',
        'flex-col',
        'w-full',
        'outline-none',
        'focus:outline-none',
        'border-0',
        'p-6', {
            'rounded-xl shadow-xl': size === 'lg',
            'rounded-lg shadow-lg': size !== 'lg',
        },
        modalInnerClassName,
    )
    
    classes.overlay = classnames(
        'mdtw-overlay',
        'fixed',
        'inset-0',
        'z-40',
        'bg-black',
        'transition-all',
        'duration-500', {
            'opacity-50 pointer-events-auto': active,
            'opacity-0 pointer-events-none': !active,
        },
        overlayClassName,
    )
    
    return classes
    
}
