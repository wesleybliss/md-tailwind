import React from 'react';

import Button from '../Button/Button'
import Modal from './Modal'
import ModalBody from './ModalBody'

export default {
    title: 'Example/Modal',
    component: Modal,
    argTypes: {
        size: {
            name: 'size',
            type: { name: 'string', required: false },
            control: { type: 'string' } 
        }
    },
};

const Template = (args) => {
    const [open, setOpen] = React.useState(false)
    const makeClasses = classes => {
        console.log(classes.overlay)
        return classes
    }
    return (
        <div>
            <Button
                className="bg-black"
                onClick={() => setOpen(true)}>
                Open Dialog
            </Button>
            <Modal
                makeClasses={makeClasses}
                wrapperClassName=""
                modalClassName=""
                modalInnerClassName="bg-gray-900 text-gray-100"
                overlayClassName=""
                active={open}
                toggler={() => setOpen(false)}
                {...args}>
                <ModalBody>
                    <h1 className="text-lg font-bold">Modal Example</h1>
                    <p>Modal content</p>
                </ModalBody>
            </Modal>
        </div>
    )
}

export const Regular = Template.bind({})
Regular.args = {
    size: 'regular',
}

/* export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
}; */
