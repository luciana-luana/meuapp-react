import './header.css';
import {Link } from 'react-router-dom'

function Header() {
  return (
    <header>
     <Link className='logo' to="/">Home</Link>
     <Link className='favoritos' to="/">Filmes</Link>
    </header>
  )
}
export default Header;

