import Button from './Button'
const Sidebar = () => {
    
    const onClick =()=>{
    console.log('click')
}

    return (
        <div className='sidebar'>

            <Button color='' text='View' onClick={onClick}/>
            <Button color='' text='Invite' onClick={onClick}/>
            <Button color='' text='Save' onClick={onClick}/>
            <Button color='' text='logout' onClick={onClick}/>
        </div>
    )
}

export default Sidebar
