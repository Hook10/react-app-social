import s from './MyPosts.module.css';
import Post from "./post/Post";

const MyPosts = () => {
    return (
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message='Hi! How are you?'
                          likes = '5' />
                    <Post message="It's my first post"
                          likes = '10'/>
                    <Post/>
                </div>
            </div>
    )
}

export default MyPosts;
