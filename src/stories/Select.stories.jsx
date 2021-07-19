import React from 'react'

import Select from '../components/Select'

export default {
    title: 'Example/Select',
    component: Select,
    argTypes: {
        
    },
}

const sampleItems = [
    { id: 1, label: 'Foo', value: 'foo' },
    { id: 2, label: 'Bar', value: 'bar' },
    { id: 3, label: 'Biz', value: 'biz' },
    { id: 4, label: 'Bat', value: 'bat' },
]

const Template = (args) => {
    
    const [selected, setSelected] = React.useState(null)
    
    const handleChange = item => {
        setSelected(item)
    }
    
    return (
        
        <div className="flex flex-col">
            
            <p>Selected: {selected || 'Nothing'}</p>
            
            <Select
                items={sampleItems}
                onChange={handleChange} />
            
        </div>
        
    )
    
}

export const Default = Template.bind({})
Default.args = {
}
