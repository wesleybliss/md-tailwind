import React from 'react';

import Alert from '../components/Alerts/Alert'

export default {
    title: 'Example/Alert',
    component: Alert,
    argTypes: {
        
    },
}

const Template = (args) => {
    
    return (
        <div className="flex flex-col">
            <Alert>This is a default alert.</Alert>
            <Alert color="blueGray">This is a <b>blueGray</b> alert.</Alert>
            <Alert color="gray">This is a <b>gray</b> alert.</Alert>
            <Alert color="brown">This is a <b>brown</b> alert.</Alert>
            <Alert color="deepOrange">This is a <b>deepOrange</b> alert.</Alert>
            <Alert color="orange">This is a <b>orange</b> alert.</Alert>
            <Alert color="amber">This is a <b>amber</b> alert.</Alert>
            <Alert color="yellow">This is a <b>yellow</b> alert.</Alert>
            <Alert color="lime">This is a <b>lime</b> alert.</Alert>
            <Alert color="lightGreen">This is a <b>lightGreen</b> alert.</Alert>
            <Alert color="green">This is a <b>green</b> alert.</Alert>
            <Alert color="teal">This is a <b>teal</b> alert.</Alert>
            <Alert color="cyan">This is a <b>cyan</b> alert.</Alert>
            <Alert color="lightBlue">This is a <b>lightBlue</b> alert.</Alert>
            <Alert color="blue">This is a <b>blue</b> alert.</Alert>
            <Alert color="indigo">This is a <b>indigo</b> alert.</Alert>
            <Alert color="deepPurple">This is a <b>deepPurple</b> alert.</Alert>
            <Alert color="purple">This is a <b>purple</b> alert.</Alert>
            <Alert color="pink">This is a <b>pink</b> alert.</Alert>
            <Alert color="red">This is a <b>red</b> alert.</Alert>
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
}
