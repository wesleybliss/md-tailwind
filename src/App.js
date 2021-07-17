import { useState } from 'react'

import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'
import ModalBody from './components/Modal/ModalBody'

import './index.css'

const App = () => {
    
    const [open, setOpen] = useState(false)
    
    return (
        
        <div className="w-full h-screen flex flex-col">
            
            <header className="w-full p-5 mb-10 bg-gray-300 text-center">
                <p>
                    md-tailwind / 1.0
                </p>
            </header>
            
            <div className="flex flex-col justify-center items-center">
                <Button
                    className="bg-black"
                    onClick={() => setOpen(true)}>
                    Open Dialog
                </Button>
                <Modal
                    wrapperClassName=""
                    modalClassName=""
                    modalInnerClassName="bg-gray-900 text-gray-100"
                    overlayClassName=""
                    active={open}
                    toggler={() => setOpen(false)}>
                    <ModalBody>
                        <h1 className="text-lg font-bold">Modal Example</h1>
                        <p>Modal content</p>
                    </ModalBody>
                </Modal>
            </div>
            
        </div>
        
    )
    
}

export default App
