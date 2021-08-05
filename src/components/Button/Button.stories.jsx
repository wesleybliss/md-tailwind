import React from 'react'

import Button from './Button'

const colors = [
    'blueGray',
    'gray',
    'brown',
    'deepOrange',
    'orange',
    'amber',
    'yellow',
    'lime',
    'lightGreen',
    'green',
    'teal',
    'cyan',
    'lightBlue',
    'blue',
    'indigo',
    'deepPurple',
    'purple',
    'pink',
    'red',
]

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        
    },
}

let clickTimer = null

const Template = (args) => {
    
    const [info, setInfo] = React.useState(null)
    
    const handleClick = color => () => {
        setInfo(`Clicked ${color} Button`)
        clearTimeout(clickTimer)
        clickTimer = setTimeout(() => setInfo(null), 3000)
    }
    
    return (
        
        <div className="flex flex-col">
            
            <p className="mb-6 p-6 bg-gray-300">
                {info || 'Waiting for click...'}
            </p>
            
            <div className="grid grid-cols-4 gap-4">
                
                {colors.map((it, i) => (
                    
                    <div>
                        <Button
                            key={`story-button-${i}`}
                            {...args}
                            color={it}
                            onClick={handleClick(it)}>
                            {
                                it.substring(0, 1).toUpperCase() +
                                it.substring(1)
                            }
                            &nbsp;Button
                        </Button>
                    </div>
                    
                ))}
                
            </div>
            
        </div>
        
    )
    
}

export const Normal = Template.bind({})
Normal.args = {
    
}
