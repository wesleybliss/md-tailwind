import React from 'react';

// import FormControlLabel from '../components/Labels/FormControlLabel'
import Checkbox from '../components/Checkbox'

export default {
    title: 'Example/Checkbox',
    component: Checkbox,
    argTypes: {
        
    },
}

const Template = (args) => {
    
    const [checked, setChecked] = React.useState(false)
    
    return (
        <div>
            <p>Checked: {checked ? 'Yes' : 'No'}</p>
            <Checkbox
                id="test-checkbox"
                text="wtf"
                checked={checked}
                onChange={() => console.log('check', checked) || setChecked(!checked)} />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
}
