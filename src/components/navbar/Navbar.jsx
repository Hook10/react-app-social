import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const activeLink = ({isActive}) => isActive ? s.active : s.item;

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" className={activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" className={activeLink}>Users</NavLink>
            </div>
            <div className={s.item }>
                <NavLink to="/news" className={activeLink}>News</NavLink>
            </div>
            <div className={s.item} >
                <NavLink to="/music" className={activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={activeLink}>Settings</NavLink>
            </div>


        </nav>
    )
}

export default Navbar;
