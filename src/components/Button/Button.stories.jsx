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

const Template = (args) => (
    <Button {...args}>
        {
            args.color.substring(0, 1).toUpperCase() +
            args.color.substring(1)
        }
        Button
    </Button>
)

export const BlueGray = Template.bind({})
BlueGray.args = {
    color: 'blueGray',
}

export const Gray = Template.bind({})
Gray.args = {
    color: 'gray',
}

export const Brown = Template.bind({})
Brown.args = {
    color: 'brown',
}

export const DeepOrange = Template.bind({})
DeepOrange.args = {
    color: 'deepOrange',
}

export const Orange = Template.bind({})
Orange.args = {
    color: 'orange',
}

export const Amber = Template.bind({})
Amber.args = {
    color: 'amber',
}

export const Yellow = Template.bind({})
Yellow.args = {
    color: 'yellow',
}

export const Lime = Template.bind({})
Lime.args = {
    color: 'lime',
}

export const LightGreen = Template.bind({})
LightGreen.args = {
    color: 'lightGreen',
}

export const Green = Template.bind({})
Green.args = {
    color: 'green',
}

export const Teal = Template.bind({})
Teal.args = {
    color: 'teal',
}

export const Cyan = Template.bind({})
Cyan.args = {
    color: 'cyan',
}

export const LightBlue = Template.bind({})
LightBlue.args = {
    color: 'lightBlue',
}

export const Blue = Template.bind({})
Blue.args = {
    color: 'blue',
}

export const Indigo = Template.bind({})
Indigo.args = {
    color: 'indigo',
}

export const DeepPurple = Template.bind({})
DeepPurple.args = {
    color: 'deepPurple',
}

export const Purple = Template.bind({})
Purple.args = {
    color: 'purple',
}

export const Pink = Template.bind({})
Pink.args = {
    color: 'pink',
}

export const Red = Template.bind({})
Red.args = {
    color: 'red',
}
