import s from "../post/Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/originals/a3/43/e5/a343e5be7f37f74c738e25c7f3071450.jpg'/>
            {props.message}
            <div>
                <span>likes {props.likes} </span>
            </div>
        </div>
    )
}

export default Post;
