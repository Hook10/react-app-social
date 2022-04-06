import Person from "./person/Person";
import s from "./Friends.module.css"


const Friends = (props) => {

    let friendsArray = props.state.friends.map(n => <Person name={n.name} id={n.id}/>)

    return (
        <div className={s.item}>
        <div>
            <div className={s.item}>
                {friendsArray}
            </div>
        </div>
        </div>
    )
}

export default Friends;
