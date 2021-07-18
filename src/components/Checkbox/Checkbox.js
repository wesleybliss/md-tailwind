import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const colors = {
    blueGray: 'mt-checkbox-blue-gray-500',
    gray: 'mt-checkbox-gray-500',
    brown: 'mt-checkbox-brown-500',
    deepOrange: 'mt-checkbox-deep-orange-500',
    orange: 'mt-checkbox-orange-500',
    amber: 'mt-checkbox-amber-500',
    yellow: 'mt-checkbox-yellow-600',
    lime: 'mt-checkbox-lime-500',
    lightGreen: 'mt-checkbox-light-green-500',
    green: 'mt-checkbox-green-500',
    teal: 'mt-checkbox-teal-500',
    cyan: 'mt-checkbox-cyan-500',
    lightBlue: 'mt-checkbox-light-blue-500',
    blue: 'mt-checkbox-blue-500',
    indigo: 'mt-checkbox-indigo-500',
    deepPurple: 'mt-checkbox-deep-purple-500',
    purple: 'mt-checkbox-purple-500',
    pink: 'mt-checkbox-pink-500',
    red: 'mt-checkbox-red-500',
}

const Checkbox = ({
    className,
    color,
    text,
    id,
    checked,
    ...rest
}) => {
    
    return (
        
        <div className="flex items-center">
            
            <input
                {...rest}
                id={id}
                type="checkbox"
                checked={checked}
                className={`mt-checkbox ${colors[color]} hidden overflow-hidden`}
            />
            
            {text && (
                <label
                    htmlFor={id}
                    className="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300">
                    <span className="relative flex justify-center items-center content-center w-5 h-5 inline-block mr-2 rounded border border-gray-500 transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={classnames(
                                'fill-current',
                                'w-3',
                                'h-3',
                                'text-blue-600',
                                'pointer-events-none', {
                                    hidden: !checked,
                                }
                            )}
                            version="1.1"
                            viewBox="0 0 17 12">
                            <g fill="none" fill-rule="evenodd">
                                <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
                                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                            </g>
                        </svg>
                    </span>
                    {text}
                </label>
            )}
            
        </div>
        
    )
    
}

Checkbox.defaultProps = {
    className: null,
    color: 'lightBlue',
    text: null,
};

Checkbox.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string.isRequired,
    text: PropTypes.string,
    id: PropTypes.string.isRequired,
};

export default Checkbox
