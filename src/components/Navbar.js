import "./Navbar.scss";
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar--left">
                <div className="navbar--left--menu">
                    <AiOutlineMenu size={25} />
                    <p className="navbar--left--menu--text">MENU</p>
                </div>
                <AiOutlineSearch style={{marginLeft:"1rem"}} size={25}/>
            </div>
            <p className="navbar--logo">Awwwards.</p>
            <div className="navbar--right">
                <p className="navbar--right--register">Register/LOG IN</p>
                <div className="navbar--right--createblog">
                    <Link style={{textDecoration:"none",color:"white"}} to="/preview"><p>CREATE BLOG POST!</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;