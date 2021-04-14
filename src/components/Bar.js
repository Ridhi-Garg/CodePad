import Button from './Button'

const Bar = () => {
    
    const onClick =()=>{
    console.log('click')
}

    return (
        <div className='bar' >
            <Button color='' text='language' onClick={onClick} />
            <Button color='' text='Run' onClick={onClick} />
            <Button color='' text='Share' onClick={onClick}/>
        </div>
    )
}

export default Bar
