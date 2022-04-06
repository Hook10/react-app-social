import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <div className={s.item}>
                <img src='https://i.pinimg.com/originals/a3/43/e5/a343e5be7f37f74c738e25c7f3071450.jpg' />
            </div>
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    </div>
    )
}

export default DialogItem;
