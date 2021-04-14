import Textarea from './Textarea'
const Editor = () => {
    return (
        <div className='editor'>
            <Textarea readOnly={false} placeholder='Write a code..'/>
            <div className='ip-op'>
            <Textarea readOnly={false} placeholder='Enter Input'/>
            <Textarea readOnly={true} placeholder='Output' />
            </div>
            
        </div>
    )
}

export default Editor
