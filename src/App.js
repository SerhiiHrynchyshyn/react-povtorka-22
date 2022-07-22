import './App.css';
import {Users} from "./componets/Users/Users";
import {useState} from "react";
import {UserDetails} from "./componets/UserDetails/UserDetails";
import {Posts} from "./componets/Posts/Posts";

function App() {

    let [user, setUser] = useState(null);
    let [postId, setPostId] = useState(null);

    const getUser = (user) => {
        setUser(user)
    }

    const getPostId = (id) => {
      setPostId(id)
    }

    return (
        <div>
            <div className={'wrap'}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getPostId={getPostId}/>}
            </div>
            {postId && <Posts postId={postId}/>}
        </div>
    );
}

export default App;
