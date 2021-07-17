import React from 'react'
import PropTypes from 'prop-types'

const CardImage = ({
    className,
    src,
    alt,
    ...rest
}) => {
    
    return (
        
        <img
            className={`w-full rounded-lg -mt-9 shadow-lg ${className}`}
            {...rest}
            src={src}
            alt={alt}
        />
        
    )
    
}

CardImage.defaultProps = {
    className: null,
    alt: '',
}

CardImage.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
}

export default CardImage
