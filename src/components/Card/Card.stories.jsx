import React from 'react';

import Card from './Card'
import CardHeader from './CardHeader'
import CardImage from './CardImage'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

export default {
    title: 'Example/Card',
    component: Card,
    argTypes: {
        
    },
}

const Template = (args) => {
    
    return (
        
        <div className="flex flex-col">
            
            <Card>
                
                <CardImage
                    src="https://source.unsplash.com/random/800x600"
                    alt="Sample Image" />
                
                <CardHeader>
                    Card Header
                </CardHeader>
                
                <CardBody>
                    <p>Test card.</p>
                    <p>Multiline text.</p>
                    <p>@todo CardRow, CardStatus, CardStatusFooter</p>
                </CardBody>
                
                <CardFooter>
                    Card Footer
                </CardFooter>
                
            </Card>
            
        </div>
        
    )
    
}

export const Default = Template.bind({})
Default.args = {
}
