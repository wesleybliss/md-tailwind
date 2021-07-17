Modal example:

```jsx
const [open, setOpen] = React.useState(false);
<div>
    <Button onClick={() => setOpen(true)}>Open Modal</Button>
    <Modal
        size="regular"
        active={open}
        toggler={() => setOpen(false)}>
        <ModalBody>
            <h1>Testing ({open ? 'Open' : 'Closed'})</h1>
            <p>Modal body content</p>
        </ModalBody>
    </Modal>
</div>
```
