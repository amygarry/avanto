import {BiMenu} from "react-icons/bi"
import {useState}from 'react'

function Header (){

    const [showMenu, setShowMenu]= useState(false)
    const handleMenu = ()=> setShowMenu(!showMenu)

    return (
        <header>
            <h2>Avanto</h2>
            <BiMenu size="35px" style={{zIndex: 3}} onClick={handleMenu}/>
            <nav className={showMenu ? 'menu-show':'menu-hide'}>
                <button>Home</button>
                <button>Login</button>
            </nav>
        </header>
    )
}

export default Header