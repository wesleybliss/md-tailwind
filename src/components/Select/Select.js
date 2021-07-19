import { useRef, useState, useEffect } from 'react'
import classnames from 'classnames'

const Select = ({
    className,
    dropdownClassName,
    items,
    onChange,
}) => {
    
    const refInput = useRef()
    
    const [value, setValue] = useState('')
    const [placeholder, setPlaceholder] = useState('')
    const [showOptions, setShowOptions] = useState(false)
    
    const handleInput = e => {
        setValue(e.target.value)
        if (e.target.value && e.target.value.length)
            setShowOptions(true)
    }
    
    const handleResetClick = e => {
        e.preventDefault()
        setValue('')
    }
    
    const handleSelfClick = e => {
        setValue(e)
        setShowOptions(false)
    }
    
    const handleItemClick = item => () => {
        onChange(item)
    }
    
    const searchResults = !value ? items : items.filter(it => {
        const il = it.label.toLowerCase()
        const iv = it.value.toLowerCase()
        const query = value.toLowerCase()
        return (
            il.includes(query) ||
            iv.includes(query)
        )
    })
    
    return (
        
        /* v-click-outside="clickedOutside" */
        <div className="relative">
            
            <input
                className={className}
                ref={refInput}
                value={value}
                placeholder={placeholder}
                onChange={handleInput}
                tabIndex="0"
            />
            
            {value && (
                <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={handleResetClick}>
                    ✕
                </span>
            )}
            
            {value && showOptions && (
                <div
                    className={classnames(
                        dropdownClassName, {
                        hidden: (!value || !showOptions),
                    })}
                    onClick={handleSelfClick}
                    onBlur={() => setShowOptions(false)}
                    tabIndex="0">
                    
                    <ul className="py-1">
                        {searchResults.map((it, i) => (
                            <li
                                key={`select-search-result-${i}`}
                                className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                                onClick={handleItemClick(it)}>
                                {it.title}
                            </li>
                        ))}
                        {!searchResults.length && (
                            <li className="px-3 py-2 text-center">
                                No Matching Results
                            </li>
                        )}
                    </ul>
                    
                </div>
            )}
            
        </div>
        
    )
    
}

export default Select
