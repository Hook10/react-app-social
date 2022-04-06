import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import Friends from "./components/friends/Friends";


const App = (props) => {


    return (

        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Friends state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs messagesPage={props.state.messagesPage}
                                                                 addMessage={props.addMessage}
                                                                 updateNewMessageText={props.updateNewMessageText}/>
                        }/>
                        <Route path="/profile" element={<Profile state={props.state.profilePage}
                                                                 addPost={props.addPost}
                                                                 updateNewPostText={props.updateNewPostText}/>
                        }/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/friends" element={<Friends state={props.state.sidebar}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
