import {useEffect, useState} from "react";

import './App.css';
import {Users} from "./components/Users/Users";
import {UserDetails} from "./components/UserDetails/UserDetails";
import {Posts} from "./components/Posts/Posts";
import {postService} from "./services/post.service";

function App() {
    let [user, setUser] = useState(null);
    let [post, setPost] = useState(null);

    const getUser = (user) => {
        setUser(user)
    }

    const getIdPost = (id) => {
        setPost(id);
    }


    return (
        <div>
            <div className={'wrap'}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getIdPost={getIdPost}/>}
            </div>
            {post && <Posts post={post}/>}
        </div>
    );
}

export default App;
