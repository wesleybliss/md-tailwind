import React from 'react'
import PropTypes from 'prop-types'

const Image = ({
    className,
    src,
    alt,
    raised,
    rounded,
    ...rest
}) => {
    
    return (
        
        <img
            {...rest}
            src={src}
            alt={alt}
            className={`${rounded ? 'rounded-full' : 'rounded-xl'} ${
                raised ? 'shadow-lg' : ''
            } max-w-full h-auto align-middle border-none ${className}`}
        />
        
    )
    
}

Image.defaultProps = {
    className: null,
    raised: false,
    rounded: false,
}

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    raised: PropTypes.bool.isRequired,
    rounded: PropTypes.bool.isRequired,
}

export default Image
