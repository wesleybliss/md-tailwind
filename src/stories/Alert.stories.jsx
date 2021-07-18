import React from 'react';

import Alert from '../components/Alerts/Alert'

export default {
    title: 'Example/Alert',
    component: Alert,
    argTypes: {
        
    },
}

const alertColors = [
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

const Template = (args) => {
    
    return (
        
        <div className="flex flex-col">
            
            <Alert>This is a default alert.</Alert>
            <Alert className="bg-blue-500 bg-opacity-30" color="transparent">
                This an alert with custom background.
            </Alert>
            
            {alertColors.map(it => (
                <Alert key={`alert-${it}`} color={it}>
                    This is a <b>{it}</b> alert.
                </Alert>
            ))}
            
        </div>
        
    )
    
}

export const Default = Template.bind({})
Default.args = {
}
