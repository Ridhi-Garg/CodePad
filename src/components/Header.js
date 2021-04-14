import Button from './Button'
import Bar from './Bar'

const Header = () => {

    const onClick =()=>{
    console.log('click')
}

    return (
        <header className='header'>
            <img src="./code_logo.png" alt="" height='100px' width= '100px'/>
           <Button color='grey' text='User' onClick={onClick}/>
           <br/>
           <Bar/>
        </header>
    )
}

export default Header
